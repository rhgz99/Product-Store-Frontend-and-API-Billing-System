# Billing System - Product Store

A full-stack e-commerce billing system with a Flask backend API and React frontend application. This system handles product management, user management, shopping carts, and billing operations.

## Project Structure

```
billing-system/
├── backend/          # Flask API - Billing system backend
├── frontend/         # React + Vite - Product store UI
└── README.md         # This file
```

## Tech Stack

### Backend
- **Framework**: Flask 2.3.3 (Python)
- **Database**: PostgreSQL
- **Database Driver**: psycopg2
- **CORS**: Flask-CORS
- **Architecture**: Modular structure with separated routes and services

### Frontend
- **Framework**: React 19.2.4
- **Build Tool**: Vite 8.0.1
- **Routing**: React Router DOM 7.14.0
- **Styling**: Tailwind CSS 4.2.2
- **UI Icons**: Hero Icons, React Icons
- **State Management**: Context API

## Prerequisites

- Python 3.8 or higher
- Node.js 16+ and npm
- Git

## Quick Start

### Backend Setup

```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
pip install -r requirements.txt
python run.py
```

The API will run on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The application will run on `http://localhost:5173`

## Features

- **Product Management**: Browse and manage products
- **User Management**: User registration and authentication
- **Shopping Cart**: Add/remove products, calculate totals
- **Billing API**: Comprehensive endpoints for e-commerce operations

## Project Status

- ✅ Backend API structure established
- ✅ Core endpoints implemented (Users, Products, Carts)
- ⏳ Frontend being updated with latest API endpoints and database integration

## Contributing

For detailed information about each component, see:
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)

