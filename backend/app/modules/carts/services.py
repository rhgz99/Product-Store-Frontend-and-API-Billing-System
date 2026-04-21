from psycopg2 import extras
from app.extensions.db import get_connection


def get_or_create_cart(user_id, cur):
    cur.execute('SELECT id FROM carts WHERE user_id = %s', (user_id,))
    cart = cur.fetchone()

    if cart:
        cart_id = cart['id']
        return cart_id
    
    cur.execute('INSERT INTO carts (user_id) VALUES (%s) RETURNING id', (user_id,))
    cart_id = cur.fetchone()['id']
    return cart_id


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
    finally:
        cur.close()
        conn.close()


def add_product(user_id, product_id, quantity):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cart_id = get_or_create_cart(user_id, cur)
        cur.execute(
            """ 
            INSERT INTO cart_products (cart_id, product_id, quantity) VALUES (%s, %s, %s) 
            ON CONFLICT (cart_id, product_id) 
            DO UPDATE SET quantity = cart_products.quantity + EXCLUDED.quantity 
            RETURNING *""",
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


def delete_product(user_id, product_id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cart_id = get_or_create_cart(user_id, cur)
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


def update_quantity(user_id, product_id, quantity):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cart_id = get_or_create_cart(user_id, cur)
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
