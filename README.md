# MFE Store - Micro Frontend E-commerce Application

## Overview

MFE Store is a modern e-commerce application built using a micro frontend architecture. This approach allows for independent development, deployment, and scaling of different parts of the application. The project consists of three main applications:

1. **Shell** - Container application that orchestrates and composes other micro frontends
2. **Catalog** - Manages product catalog, categories, and product details
3. **Cart** - Handles shopping cart functionality and checkout process

This application demonstrates how micro frontends can be implemented using Webpack Module Federation, enabling teams to work independently while delivering a cohesive user experience.

## Architecture

The application follows a module federation approach with the following components:

### Shell Application
- Acts as the container for all micro frontends
- Handles routing between different micro frontends
- Provides shared UI components and layout (header, footer)
- Serves as the entry point for users
- Implements error boundaries for resilience
- Manages global state and authentication (if implemented)
- Handles cross-cutting concerns like analytics and logging

### Catalog Micro Frontend
- Displays product listings and categories
- Shows detailed product information
- Manages product state using Redux
- Exposes React components for Shell to consume
- Implements product search and filtering
- Handles category navigation
- Provides product recommendation functionality

### Cart Micro Frontend
- Manages shopping cart state
- Handles cart operations (add, remove, update quantity)
- Provides checkout functionality
- Maintains cart state using Redux with persistence
- Includes a Cart API server for backend operations
- Implements order summary and calculation
- Handles shipping and payment form validation
- Provides order confirmation

### Communication Between Micro Frontends
- Micro frontends communicate primarily through URLs/routing
- The Shell application orchestrates the composition of micro frontends
- Redux state is isolated per micro frontend to maintain independence
- API calls are made directly from each micro frontend to its respective services
- Event-based communication for cross-micro frontend interactions

## Technology Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit with Redux Persist for persistence
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Module Federation**: Webpack Module Federation / Vite Plugin Federation
- **Backend**: Express.js for Cart API
- **Build Tools**: Webpack 5 with Module Federation Plugin
- **Programming Language**: TypeScript
- **HTTP Client**: Native Fetch API
- **Icons**: Lucide React icons
- **Error Handling**: React Error Boundaries
- **Async Loading**: React Suspense for lazy loading

## Project Structure

```
mfe-store/
├── apps/
│   ├── shell/                        # Container application
│   │   ├── src/
│   │   │   ├── components/           # Shared UI components
│   │   │   │   ├── atoms/            # Basic UI components
│   │   │   │   ├── molecules/        # Composite components
│   │   │   │   └── organisms/        # Complex UI sections
│   │   │   ├── App.tsx               # Main application component
│   │   │   ├── bootstrap.tsx         # Application initialization
│   │   │   ├── remoteTypes.d.ts      # Type definitions for remote components
│   │   │   └── index.ts              # Entry point
│   │   ├── index.html                # HTML template
│   │   ├── webpack.config.js         # Webpack configuration with Module Federation
│   │   ├── tailwind.config.js        # Tailwind CSS configuration
│   │   └── package.json              # Dependencies and scripts
│   │
│   ├── catalog/                      # Product catalog micro frontend
│   │   ├── src/
│   │   │   ├── components/           # Catalog-specific components
│   │   │   ├── data/                 # Mock product data
│   │   │   │   └── products.json     # Sample product catalog
│   │   │   ├── hooks/                # Custom React hooks
│   │   │   │   └── useAddToCart.ts   # Hook for cart functionality
│   │   │   ├── pages/                # Page components
│   │   │   │   ├── HomePage.tsx      # Home page with featured products
│   │   │   │   ├── CategoryPage.tsx  # Category listing page
│   │   │   │   └── ProductPage.tsx   # Product detail page
│   │   │   ├── store/                # Redux store configuration
│   │   │   │   ├── productSlice.ts   # Product state management
│   │   │   │   └── store.ts          # Redux store configuration
│   │   │   ├── bootstrap.tsx         # Application initialization
│   │   │   └── index.ts              # Entry point
│   │   ├── index.html                # HTML template
│   │   ├── webpack.config.js         # Webpack configuration with Module Federation
│   │   ├── tailwind.config.js        # Tailwind CSS configuration
│   │   └── package.json              # Dependencies and scripts
│   │
│   └── cart/                         # Shopping cart micro frontend
│       ├── src/
│       │   ├── api/                  # Cart API implementation
│       │   │   └── cartApi.ts        # Cart API endpoints
│       │   ├── components/           # Cart-specific components
│       │   │   └── StoreProvider.tsx # Redux provider component
│       │   ├── pages/                # Page components
│       │   │   ├── CartPage.tsx      # Shopping cart page
│       │   │   └── CheckoutPage.tsx  # Checkout process page
│       │   ├── store/                # Redux store configuration
│       │   │   ├── cartSlice.ts      # Cart state management
│       │   │   └── store.ts          # Redux store with persistence
│       │   ├── server.ts             # Express server for Cart API
│       │   ├── bootstrap.tsx         # Application initialization
│       │   └── index.ts              # Entry point
│       ├── index.html                # HTML template
│       ├── webpack.config.js         # Webpack configuration with Module Federation
│       ├── tailwind.config.js        # Tailwind CSS configuration
│       └── package.json              # Dependencies and scripts
│
├── package.json                      # Root package.json with workspaces
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.js                 # PostCSS configuration for Tailwind
└── README.md                         # Project documentation
```

### Key Files

#### Shell Application
- `apps/shell/src/App.tsx` - Main application component that handles routing and error boundaries
- `apps/shell/src/components/organisms/Header.tsx` - Global navigation component
- `apps/shell/src/components/organisms/Footer.tsx` - Global footer component
- `apps/shell/webpack.config.js` - Module Federation configuration for consuming remotes

#### Catalog Application
- `apps/catalog/src/data/products.json` - Mock product data
- `apps/catalog/src/pages/HomePage.tsx` - Home page with featured products
- `apps/catalog/src/pages/CategoryPage.tsx` - Category listing page
- `apps/catalog/src/pages/ProductPage.tsx` - Product detail page
- `apps/catalog/src/store/productSlice.ts` - Redux slice for product state
- `apps/catalog/webpack.config.js` - Module Federation configuration for exposing components

#### Cart Application
- `apps/cart/src/api/cartApi.ts` - API endpoints for cart operations
- `apps/cart/src/pages/CartPage.tsx` - Shopping cart page
- `apps/cart/src/pages/CheckoutPage.tsx` - Checkout process page
- `apps/cart/src/store/cartSlice.ts` - Redux slice for cart state
- `apps/cart/src/server.ts` - Express server implementation
- `apps/cart/webpack.config.js` - Module Federation configuration for exposing components

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 8 or higher
- An internet connection (for loading Tailwind CSS and other dependencies)

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

The `npm start` command runs several scripts in parallel:
1. Cleans the cache directories for a fresh start
2. Starts the Shell application
3. Starts the Catalog micro frontend
4. Starts the Cart micro frontend
5. Starts the Cart API server

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

Each micro frontend can run independently for development purposes. However, to experience the full application functionality, the Shell application needs the remote micro frontends to be running.

### Developing Micro Frontends

Each micro frontend can be developed in isolation:

1. Navigate to the specific application directory:
   ```bash
   cd apps/catalog  # or cart, or shell
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Make your changes in the respective application

### Build for Production

Build all applications:

```bash
npm run build
```

This command will:
1. Clean the cache and build directories
2. Build the Shell application
3. Build the Catalog micro frontend
4. Build the Cart micro frontend

Or build individual applications:

```bash
# Shell application
npm run build:shell

# Catalog micro frontend
npm run build:catalog

# Cart micro frontend
npm run build:cart
```

### Deployment

The build process generates static assets for each micro frontend in their respective `dist` directories. For deployment:

1. Host each micro frontend on its own domain/subdomain
2. Configure the Shell application's remotes to point to the production URLs
3. Ensure CORS is properly configured for production environments

Example production configuration for Shell:

```javascript
// Production webpack.config.js for Shell
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    catalog: 'catalog@https://catalog.your-domain.com/remoteEntry.js',
    cart: 'cart@https://cart.your-domain.com/remoteEntry.js',
  },
  // shared dependencies
})
```

## Features

### Catalog Application
- Browse product categories with category filtering
- View product listings with image previews
- View detailed product information and specifications
- Add products to cart with quantity selection
- Product search functionality
- Responsive grid layout for products
- Category navigation with breadcrumbs
- Featured products section on homepage

### Cart Application
- View cart items with product images and details
- Update item quantities with increment/decrement controls
- Remove items from cart with confirmation
- Order summary with subtotal and total calculations
- Checkout process with shipping and billing information
- Form validation for checkout process
- Persist cart state across sessions using Redux Persist
- Continue shopping functionality that returns to previous page

### Shell Application
- Navigation between micro frontends via header navigation
- Global layout with responsive header and footer
- Error boundaries to isolate micro frontend failures
- Lazy loading of micro frontends with loading states
- Global search accessible from any page
- Responsive design that works on mobile, tablet, and desktop
- Consistent styling and UI components across micro frontends

## Module Federation Configuration

The application uses module federation to share components and avoid duplication:

### Shell (Host)
- Consumes remote components from Catalog and Cart
- Provides shared dependencies through the `shared` property in webpack.config.js
- Sets up remotes for Catalog and Cart applications
- Manages routing between micro frontends
- Implements error handling for failed micro frontend loading

### Catalog (Remote)
- Exposes HomePage, CategoryPage, and ProductPage components through the `exposes` property
- Shares dependencies with Shell to avoid duplication (React, React DOM, etc.)
- Configured to work both standalone and as a remote
- Exports its Redux store configuration for potential integration

### Cart (Remote)
- Exposes CartPage and CheckoutPage components through the `exposes` property
- Shares dependencies with Shell like React, React-Router, Redux
- Includes API for cart operations that can be called from other micro frontends
- Implements its own Redux store with persistence
- Configured to work both as a standalone app and as a remote

### Detailed Configuration

The module federation is configured in the webpack.config.js files of each application. Here's a simplified example:

```javascript
// Shell webpack.config.js
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    catalog: 'catalog@http://localhost:3001/remoteEntry.js',
    cart: 'cart@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: '^18.3.1' },
    'react-dom': { singleton: true, eager: true, requiredVersion: '^18.3.1' },
    'react-router-dom': { singleton: true, eager: true, requiredVersion: '^6.22.3' },
    // other shared dependencies
  },
})

// Catalog webpack.config.js
new ModuleFederationPlugin({
  name: 'catalog',
  filename: 'remoteEntry.js',
  exposes: {
    './HomePage': './src/pages/HomePage',
    './CategoryPage': './src/pages/CategoryPage',
    './ProductPage': './src/pages/ProductPage',
  },
  shared: { /* ... */ },
})

// Cart webpack.config.js
new ModuleFederationPlugin({
  name: 'cart',
  filename: 'remoteEntry.js',
  exposes: {
    './CartPage': './src/pages/CartPage',
    './CheckoutPage': './src/pages/CheckoutPage',
  },
  shared: { /* ... */ },
})
```

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

### Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/cart/add` - Add item to cart

### API Request/Response Examples

#### Add Item to Cart

**Request:**
```json
POST /api/cart/add
Content-Type: application/json

{
  "id": "1",
  "name": "Classic White Sneakers",
  "price": 89.99,
  "quantity": 1,
  "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772"
}
```

**Response:**
```json
{
  "message": "Item added to cart successfully",
  "item": {
    "id": "1",
    "name": "Classic White Sneakers",
    "price": 89.99,
    "quantity": 1,
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772"
  }
}
```

### Error Handling

The API implements proper error handling with appropriate HTTP status codes:

- `400 Bad Request` - Invalid item data
- `500 Internal Server Error` - Server-side errors

### CORS Configuration

The API is configured with CORS to allow cross-origin requests during development, with the following settings:

```javascript
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## Development Guidelines

### Code Organization

- Each micro frontend should maintain its own feature set and not depend on other micro frontends
- Use atomic design principles for component organization (atoms, molecules, organisms)
- Follow Redux best practices for state management
- Implement feature-based folder structure within each application

### Styling

The project uses Tailwind CSS for styling:

- Use Tailwind utility classes for styling components
- Avoid custom CSS unless absolutely necessary
- Maintain consistent styling across micro frontends
- Follow the project's color scheme and design guidelines

### Testing

Although not initially set up, the following testing approach is recommended:

- Unit tests for components using Jest and React Testing Library
- Integration tests for Redux slices and API interactions
- End-to-end tests using Cypress or Playwright
- Visual regression tests for UI components

### Performance Considerations

- Lazy load components and routes whenever possible
- Implement code splitting at the route level
- Optimize bundle sizes using tree shaking and dynamic imports
- Monitor and optimize the loading time of remote entries
- Implement caching strategies for API responses

## Troubleshooting

### Common Issues

1. **Module Federation connection issues**
   - Ensure all micro frontends are running
   - Check the URLs in the webpack.config.js files
   - Verify there are no port conflicts

2. **CORS errors during development**
   - Verify the CORS configuration in the Cart API server
   - Ensure the proxy settings in the Shell application are correct

3. **Redux state persistence issues**
   - Check Redux Persist configuration
   - Clear local storage if schema changes occur

4. **Styling inconsistencies**
   - Ensure Tailwind CSS is properly configured in all applications
   - Verify the shared components are being used consistently

### Debugging Tips

- Use React DevTools for component inspection
- Use Redux DevTools for state inspection
- Check the browser console for module federation errors
- Examine network requests for API communication issues

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

When contributing, please follow these guidelines:
- Write clean, maintainable code following the project's code style
- Include tests for new features
- Update documentation as needed
- Keep pull requests focused on a single concern

## Future Enhancements

Potential future features for this application:

1. User authentication micro frontend
2. Product review and ratings system
3. Order history and tracking
4. Admin dashboard for product management
5. Integrated payment processing
6. Wishlist functionality
7. Mobile app using React Native
8. Internationalization support

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/) - UI library
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/) - Micro frontend architecture
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons
- [Express.js](https://expressjs.com/) - Server framework for API
- [React Router](https://reactrouter.com/) - Routing library
- [Redux Persist](https://github.com/rt2zz/redux-persist) - State persistence