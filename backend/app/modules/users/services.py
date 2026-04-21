from psycopg2 import extras
from app.extensions.db import get_connection


def get_users():
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("SELECT id, username, email FROM users ORDER BY ID")
        return cur.fetchall()

    finally:
        cur.close()
        conn.close()


def get_user(user_id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("SELECT id, username, email FROM users WHERE id = %s", (user_id,))
        return cur.fetchone()

    finally:
        cur.close()
        conn.close()


def delete_user(user_id):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("DELETE FROM users WHERE id = %s RETURNING id, username", (user_id,))
        user = cur.fetchone()
        conn.commit()
        return user

    except Exception:
        conn.rollback()
        raise

    finally:
        cur.close()
        conn.close()


def update_password(user_id, new_password):
    password = new_password.get("password")

    if not password:
        raise ValueError("Missing required field")

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            "UPDATE users SET password = %s, updated_at = CURRENT_TIMESTAMP WHERE id = %s RETURNING id, username",
            (password, user_id),
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
