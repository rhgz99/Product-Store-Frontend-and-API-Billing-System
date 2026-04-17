from psycopg2 import extras
from app.extensions.db import get_connection


def create_product(new_product):
    name = new_product.get("name")
    description = new_product.get("description")
    price = new_product.get("price")
    img_url = new_product.get("img_url")

    if name is None or description is None or price is None or img_url is None:
        raise ValueError("Missing required fields")

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "INSERT INTO products (name, description, price, img_url) VALUES (%s, %s, %s, %s) RETURNING *",
            (name, description, price, img_url),
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


def get_products():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "SELECT id, name, description, price, img_url FROM products ORDER BY id"
        )
        return cur.fetchall()

    finally:
        cur.close()
        conn.close()


def get_product(id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "SELECT id, name, description, price, img_url FROM products WHERE id = %s",
            (id,),
        )
        return cur.fetchone()

    finally:
        cur.close()
        conn.close()


def delete_product(id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("DELETE FROM products WHERE id = %s RETURNING id, name", (id,))
        product = cur.fetchone()
        conn.commit()
        return product

    except Exception:
        conn.rollback()
        raise

    finally:
        cur.close()
        conn.close()


def update_product(id, product):
    name = product.get("name")
    description = product.get("description")
    price = product.get("price")
    img_url = product.get("img_url")

    if name is None or description is None or price is None or img_url is None:
        raise ValueError("Missing required fields")

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "UPDATE products SET name = %s, description = %s, price = %s, img_url = %s WHERE id = %s RETURNING id, name",
            (name, description, price, img_url, id),
        )
        updated_product = cur.fetchone()
        conn.commit()
        return updated_product

    except Exception:
        conn.rollback()
        raise

    finally:
        cur.close()
        conn.close()
