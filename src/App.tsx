// src/App.tsx
import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>IKEA Fuzzy Search</h1>
            <ProductForm />
            <ProductList />
        </div>
    );
};

export default App;
