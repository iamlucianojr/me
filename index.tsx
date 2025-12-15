import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { PostHogProvider } from "./src/providers/PostHogProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PostHogProvider>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);