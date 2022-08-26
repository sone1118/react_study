import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './index.css';
import App from './App';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';
//import ContextSample from './ContextSample';

Sentry.init({
  dsn: "https://6458de9e81324813af765d9a77493348@o1378905.ingest.sentry.io/6691269",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <div>
    <App />
  </div>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
