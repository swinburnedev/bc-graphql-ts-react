import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const token: string = localStorage.getItem('token') || process.env.REACT_APP_SCHEMA_TOKEN || '';
const link = new HttpLink({
  uri: process.env.REACT_APP_SCHEMA_PATH,
  credentials: 'include',
  headers: {
    authorization: `Bearer ${token}`,
    'content-type': 'application/json'
  },
  fetchOptions: {
    mode: 'cors',
    method: 'POST'
  },
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
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
