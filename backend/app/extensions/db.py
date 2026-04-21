import os
from psycopg2 import connect


def get_connection():
    conn = connect(os.environ["DB_URL"])
    return conn