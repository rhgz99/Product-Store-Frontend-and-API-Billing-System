from psycopg2 import connect

host = "localhost"
port = 5432
dbname = "ecommerce_db"
user = "postgres"
password = "secretpassword"


def get_connection():
    conn = connect(host=host, port=port, dbname=dbname, user=user, password=password)
    return conn
