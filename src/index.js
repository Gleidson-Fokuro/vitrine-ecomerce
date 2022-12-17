import React from 'react';
import { createRoot } from 'react-dom/client';
import RouteSwitch from './RouteSwitch';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
