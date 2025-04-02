# MFE Store - Micro Frontend E-commerce Application

## Overview

MFE Store is a modern e-commerce application built using a micro frontend architecture. This approach allows for independent development, deployment, and scaling of different parts of the application. The project consists of three main applications:

1. **Shell** - Container application that orchestrates and composes other micro frontends
2. **Catalog** - Manages product catalog, categories, and product details
3. **Cart** - Handles shopping cart functionality and checkout process

## Architecture

The application follows a module federation approach with the following components:

### Shell Application
- Acts as the container for all micro frontends
- Handles routing between different micro frontends
- Provides shared UI components and layout (header, footer)
- Serves as the entry point for users

### Catalog Micro Frontend
- Displays product listings and categories
- Shows detailed product information
- Manages product state using Redux
- Exposes React components for Shell to consume

### Cart Micro Frontend
- Manages shopping cart state
- Handles cart operations (add, remove, update quantity)
- Provides checkout functionality
- Maintains cart state using Redux with persistence
- Includes a Cart API server for backend operations

## Technology Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Module Federation**: Webpack Module Federation / Vite Plugin Federation
- **Backend**: Express.js for Cart API
- **Build Tools**: Webpack / Vite
- **Programming Language**: TypeScript

## Project Structure

```
mfe-store/
├── apps/
│   ├── shell/                # Container application
│   │   ├── src/
│   │   │   ├── components/   # Shared UI components
│   │   │   ├── App.tsx       # Main application component
│   │   │   └── ...
│   │   └── ...
│   ├── catalog/              # Product catalog micro frontend
│   │   ├── src/
│   │   │   ├── components/   # Catalog-specific components
│   │   │   ├── pages/        # Page components
│   │   │   ├── store/        # Redux store configuration
│   │   │   └── ...
│   │   └── ...
│   └── cart/                 # Shopping cart micro frontend
│       ├── src/
│       │   ├── api/          # Cart API implementation
│       │   ├── components/   # Cart-specific components
│       │   ├── pages/        # Page components
│       │   ├── store/        # Redux store configuration
│       │   └── ...
│       └── ...
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 8 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/npmirajkar/mfe-store.git
   cd mfe-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start all applications simultaneously:

```bash
npm start
```

This will start the following services:
- Shell application: http://localhost:3000
- Catalog micro frontend: http://localhost:3001
- Cart micro frontend: http://localhost:3002
- Cart API server: http://localhost:3003

### Running Individual Applications

You can also run each application separately:

```bash
# Shell application
npm run start:shell

# Catalog micro frontend
npm run start:catalog

# Cart micro frontend
npm run start:cart

# Cart API server
npm run start:cart-api
```

## Build for Production

Build all applications:

```bash
npm run build
```

Or build individual applications:

```bash
# Shell application
npm run build:shell

# Catalog micro frontend
npm run build:catalog

# Cart micro frontend
npm run build:cart
```

## Features

### Catalog Application
- Browse product categories
- View product listings
- View detailed product information
- Add products to cart

### Cart Application
- View cart items
- Update item quantities
- Remove items from cart
- Checkout process
- Persist cart state

### Shell Application
- Navigation between micro frontends
- Global layout with header and footer
- Error boundaries to isolate micro frontend failures
- Lazy loading of micro frontends

## Module Federation Configuration

The application uses module federation to share components and avoid duplication:

### Shell (Host)
- Consumes remote components from Catalog and Cart
- Provides shared dependencies

### Catalog (Remote)
- Exposes HomePage, CategoryPage, and ProductPage components
- Shares dependencies with Shell

### Cart (Remote)
- Exposes CartPage and CheckoutPage components
- Shares dependencies with Shell

## Architecture Diagrams

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                              │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                 Shell Application (Host)                    │
│                      localhost:3000                         │
│  ┌─────────────────────┐        ┌─────────────────────────┐ │
│  │  Header Component   │        │    Footer Component     │ │
│  └─────────────────────┘        └─────────────────────────┘ │
│  ┌─────────────────────┐        ┌─────────────────────────┐ │
│  │   Catalog Remote    │        │     Cart Remote         │ │
│  │   localhost:3001    │        │     localhost:3002      │ │
│  └─────────────────────┘        └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## State Management

Each micro frontend manages its own state using Redux:

- **Catalog State**: Product listings, categories, current product
- **Cart State**: Cart items, quantities, totals
- **Shell State**: Global application state

## API Server

The Cart micro frontend includes an Express.js API server that provides endpoints for cart operations:

- `GET /api/health` - Health check endpoint
- `POST /api/cart/add` - Add item to cart

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)