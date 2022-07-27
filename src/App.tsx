import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import ProductList from './components/ProductList';

function App() {
  const [id, setId] = React.useState<number>(123);
  const handleIdChange = React.useCallback((newId: number) => {
    setId(newId);
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-wrapper">
        <div className='App-half'>
          <ProductList handleIdChange={handleIdChange} />
        </div>
        <div className='App-half'>
          <Product id={id} />
        </div>
      </div>
    </div>
  );
}

export default App;
