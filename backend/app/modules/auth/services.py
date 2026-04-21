import os
import jwt
import bcrypt
from psycopg2 import extras
from datetime import datetime, timezone, timedelta
from app.extensions.db import get_connection


key = os.environ.get("JWT_KEY")



def get_user_by_email(email):
    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute("SELECT * from users WHERE email = %s", (email,))
        user = cur.fetchone()
        return user
    finally:
        cur.close()
        conn.close()


def register_user(username, email, password):
    hash_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

    conn = get_connection()
    cur = conn.cursor(cursor_factory=extras.RealDictCursor)

    try:
        cur.execute(
            """ 
            INSERT INTO users (username, email, password)
            VALUES (%s, %s, %s) RETURNING id, username, email
            """,
            (username, email, hash_password),
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


def login_user(email, password):
    user = get_user_by_email(email)

    if not user:
        return None

    if not bcrypt.checkpw(password.encode(), user["password"].encode()):
        return None

    payload = {
        "user_id": user["id"],
        "exp": datetime.now(timezone.utc) + timedelta(hours=24),
    }

    token = jwt.encode(payload, key, algorithm="HS256")

    return {"token": token}


def decode_token(token):
    return jwt.decode(token, key, algorithms=["HS256"])
