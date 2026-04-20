# Frontend - Product Store

React-based frontend application for the billing system product store, built with Vite and featuring a modern, responsive user interface with Tailwind CSS.

## ⚠️ Work in Progress

This frontend is being actively updated to integrate with the latest API endpoints and database implementations. Features and components are being refined based on backend development.

## Prerequisites

- Node.js 16+ and npm
- Backend API running at `http://localhost:5000`

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

### 5. Lint Code

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── App.jsx                 # Main app component
│   ├── AppProviders.jsx        # Context providers wrapper
│   └── main.jsx                # Application entry point
├── assets/                     # Images, fonts, static files
├── features/
│   ├── cart/
│   │   ├── components/         # Cart UI components
│   │   ├── context/            # Cart state management
│   │   └── hooks/              # Custom cart hooks
│   ├── clients/
│   │   └── components/         # Client management components
│   ├── products/
│   │   ├── components/         # Product UI components
│   │   ├── context/            # Products state management
│   │   └── hooks/              # Custom product hooks
├── pages/
│   └── Home.jsx                # Home page
├── shared/
│   └── components/             # Reusable components (Navbar, etc.)
├── styles/
│   └── index.css               # Global styles
├── index.html                  # HTML template
vite.config.js                 # Vite configuration
eslint.config.js              # ESLint configuration
package.json                  # Dependencies and scripts
```

## Features

### Current Implementation
- ✅ Product listing interface
- ✅ Shopping cart functionality
- ✅ Client management components
- ✅ Context API for state management
- ✅ Responsive navigation bar

### In Development
- ⏳ Full API integration with backend endpoints
- ⏳ User authentication
- ⏳ Cart persistence
- ⏳ Order checkout flow
- ⏳ Database integration

## Technologies Used

- **React 19.2.4**: Modern UI library
- **Vite 8.0.1**: Fast build tool and dev server
- **React Router DOM 7.14.0**: Client-side routing
- **Tailwind CSS 4.2.2**: Utility-first CSS styling
- **Hero Icons**: Premium SVG icons
- **React Icons 5.6.0**: Icon library
- **Context API**: State management
- **ESLint**: Code quality and linting

## Available Scripts

```bash
# Start development server with hot module replacement
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality checks
npm run lint
```

## State Management

The application uses React Context API for state management with custom hooks and providers:

### Cart Context
Manages shopping cart state via `CartContext.js` and `CartProvider.jsx`:
- Items in cart with quantities
- Cart totals calculation
- Add/remove items operations
- Custom `useCart()` hook for component access

### Products Context
Manages product-related state via `ProductsContext.js` and `ProductsProvider.jsx`:
- Product list from backend
- Product filtering and search
- Product details
- Custom `useProducts()` hook for component access

## API Integration

The frontend communicates with the backend API at `http://localhost:5000`. Key integration points:
- **Users API**: Registration, authentication, profile management
- **Products API**: Browse and retrieve product catalog
- **Carts API**: Shopping cart operations and checkout

Ensure the backend is running before starting the frontend application.

## Styling with Tailwind CSS

The project uses **Tailwind CSS 4.2.2** for styling. It's configured via `tailwind.config.js` and provides:
- Utility-first CSS classes
- Responsive design utilities
- Custom theme configuration
- Dark mode support (optional)

## Component Architecture

### Feature-Based Organization
- **Cart**: Shopping cart functionality with add/remove items
- **Products**: Product listing and management
- **Clients**: Client/user management
- **Shared**: Reusable components (Navbar, etc.)

## Coming Soon

Updates are being made to integrate with:
- Latest backend API endpoints
- Database-driven product catalog
- User authentication flow
- Cart persistence
- Checkout process
- Enhanced user experience

Stay tuned for updates!

## Development Notes

- The application uses Vite for fast hot module replacement (HMR) during development
- ESLint is configured for code quality checks with React-specific rules
- Components follow React best practices with functional component patterns
- React Router DOM enables client-side navigation without page reloads
- Tailwind CSS provides responsive, utility-based styling
