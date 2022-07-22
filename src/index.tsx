import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// TODO get token from local storage - localStorage.getItem('token')
const token: string = process.env.REACT_APP_SCHEMA_TOKEN || '';
const client = new ApolloClient({
  uri: process.env.REACT_APP_SCHEMA_PATH,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}`,
    origin: 'https://developer.bigcommerce.com'
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
