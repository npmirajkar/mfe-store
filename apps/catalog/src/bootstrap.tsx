import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './index.css';

// Initialize the application
const mount = () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

// Mount the app after the container is ready
mount();