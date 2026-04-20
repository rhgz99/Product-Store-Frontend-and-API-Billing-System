# Backend API - Billing System

Flask-based REST API for the billing system, providing endpoints for product management, user management, shopping carts, and billing operations.

## Prerequisites

- Python 3.8+
- PostgreSQL 12+ running locally or accessible
- PostgreSQL credentials configured

## Setup Instructions

### 1. PostgreSQL Configuration

Before starting, ensure PostgreSQL is running and update the connection details in `app/extensions/db.py`:

```python
host = "localhost"
port = 5432
dbname = "ecommerce_db"
user = "postgres"
password = "secretpassword"
```

Create the database and tables:

```bash
psql -U postgres -d ecommerce_db -f database/schema.sql
```

### 2. Create Virtual Environment

```bash
python -m venv venv
```

### 3. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### 4. Install Dependencies

```bash
pip install -r requirements.txt
```

### 5. Run the Application

```bash
python run.py
```

The API will be available at `http://localhost:5000`

## Project Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── extensions/
│   │   ├── db.py              # Database configuration
│   │   └── extensions.py       # Flask extensions
│   └── modules/
│       ├── users/
│       │   ├── routes.py       # User endpoints
│       │   └── services.py     # User business logic
│       ├── products/
│       │   ├── routes.py       # Product endpoints
│       │   └── services.py     # Product business logic
│       └── carts/
│           ├── routes.py       # Cart endpoints
│           └── services.py     # Cart business logic
├── database/
│   └── schema.sql              # Database schema
├── run.py                      # Application entry point
└── requirements.txt            # Python dependencies
```

## API Endpoints

### Users Module
- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/<id>` - Get user by ID
- `PUT /api/users/<id>` - Update user password
- `DELETE /api/users/<id>` - Delete user

### Products Module
- `POST /api/products` - Create a new product
- `GET /api/products` - Get all products
- `GET /api/products/<id>` - Get product by ID
- `PUT /api/products/<id>` - Update product
- `DELETE /api/products/<id>` - Delete product

### Carts Module
- `POST /api/carts` - Create a new cart
- `GET /api/carts/<id>` - Get cart by ID
- `POST /api/carts/<id>/items` - Add item to cart
- `DELETE /api/carts/<id>/items/<item_id>` - Remove item from cart
- `GET /api/carts/<id>/total` - Calculate cart total

## Architecture

### Modular Design
The application is organized by features (users, products, carts). Each module contains:
- **routes.py**: HTTP endpoint definitions
- **services.py**: Business logic and data processing

### Database
PostgreSQL is used as the main database. The schema is defined in `database/schema.sql` with the following tables:
- **users**: User accounts with email and password
- **products**: Product catalog
- **carts**: Shopping carts linked to users
- **cart_products**: Junction table for cart items with quantities

## Dependencies

See `requirements.txt` for all Python packages and versions required.

Main dependencies:
- **Flask** (2.3.3): Web framework
- **Flask-CORS**: Cross-Origin Resource Sharing support
- **psycopg2**: PostgreSQL adapter for Python

## Development

### Running with Debug Mode

The application runs in debug mode by default. Ensure PostgreSQL is running and properly configured:
```bash
python run.py
```

## Troubleshooting

- **PostgreSQL connection errors**: 
  - Verify PostgreSQL is running
  - Check credentials in `app/extensions/db.py`
  - Ensure database `ecommerce_db` exists
  - Verify schema was imported: `psql -U postgres -d ecommerce_db -f database/schema.sql`
- **Import errors**: Verify virtual environment is activated and dependencies are installed
- **Port already in use**: Change the port in `run.py` if 5000 is unavailable

## Database Schema

The database includes:
- User authentication with unique email and username
- Product catalog with pricing and descriptions
- User-specific shopping carts
- Cart items with quantity tracking
- Automatic timestamps and referential integrity constraints