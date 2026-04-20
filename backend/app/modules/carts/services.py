from psycopg2 import extras
from app.extensions.db import get_connection


def create_cart(user_id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("INSERT INTO carts (user_id) VALUES (%s) RETURNING id", (user_id,))
        cart = cur.fetchone()
        conn.commit()
        return cart

    except Exception:
        conn.rollback()
        raise

    finally:
        cur.close()
        conn.close()


def get_cart(user_id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            """
            SELECT products.name, products.price, products.img_url, cart_products.quantity
            FROM cart_products
            JOIN carts ON carts.id = cart_products.cart_id
            JOIN products ON products.id = cart_products.product_id
            WHERE carts.user_id = %s""",
            (user_id,),
        )
        products = cur.fetchall()

        cur.execute(
            """ 
            SELECT COALESCE(SUM(cart_products.quantity * products.price), 0) AS total
            FROM cart_products
            JOIN carts ON carts.id = cart_products.cart_id
            JOIN products ON products.id = cart_products.product_id
            WHERE carts.user_id = %s""",
            (user_id,),
        )
        total = float(cur.fetchone()["total"])

        return {"products": products, "total": total}
    except Exception:
        raise
    finally:
        cur.close()
        conn.close()


def add_product(cart_id, product_id, quantity):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "INSERT INTO cart_products (cart_id, product_id, quantity) VALUES (%s, %s, %s) ON CONFLICT (cart_id, product_id) DO UPDATE SET quantity = cart_products.quantity + EXCLUDED.quantity RETURNING *",
            (cart_id, product_id, quantity),
        )
        product = cur.fetchone()
        conn.commit()
        return product
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()


def delete_product(cart_id, product_id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "DELETE FROM cart_products WHERE cart_id = %s AND product_id = %s RETURNING *",
            (cart_id, product_id),
        )
        product = cur.fetchone()
        conn.commit()
        return product
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()


def update_quantity(cart_id, product_id, product_quantity):
    quantity = product_quantity.get("quantity")

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "UPDATE cart_products SET quantity = %s WHERE cart_id = %s and product_id = %s RETURNING *",
            (quantity, cart_id, product_id),
        )
        updated_quantity = cur.fetchone()
        conn.commit()
        return updated_quantity
    except Exception:
        conn.rollback()
        raise
    finally:
        cur.close()
        conn.close()
