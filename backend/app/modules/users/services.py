from psycopg2 import extras
from app.extensions.db import get_connection


def create_user(new_user):
    username = new_user.get("username")
    email = new_user.get("email")
    password = new_user.get("password")

    if not username or not email or not password:
        raise ValueError("Missing required fields")

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "INSERT INTO users (username, email, password) VALUES (%s, %s, %s) RETURNING id, username, email",
            (username, email, password),
        )
        user = cur.fetchone()
        conn.commit()
        return user

    except Exception:
        conn.rollback()
        raise

    finally:
        cur.close()
        conn.close()


def get_users():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("SELECT id, username, email FROM users ORDER BY ID")
        return cur.fetchall()

    finally:
        cur.close()
        conn.close()


def get_user(id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("SELECT id, username, email FROM users WHERE id = %s", (id,))
        return cur.fetchone()

    finally:
        cur.close()
        conn.close()


def delete_user(id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("DELETE FROM users WHERE id = %s RETURNING id, username", (id,))
        user = cur.fetchone()
        conn.commit()
        return user

    except Exception:
        conn.rollback()
        raise

    finally:
        cur.close()
        conn.close()


def update_password(id, new_password):
    password = new_password.get("password")

    if not password:
        raise ValueError("Missing required field")

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "UPDATE users SET password = %s WHERE id = %s RETURNING id, username",
            (password, id),
        )
        updated_password = cur.fetchone()
        conn.commit()
        return updated_password

    except Exception:
        conn.rollback()
        raise

    finally:
        cur.close()
        conn.close()
