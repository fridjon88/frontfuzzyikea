import React, { useEffect, useState } from 'react';
import { getAllProducts, searchProducts } from '../services/productService'; // Import getAllProducts
import { Product } from '../types/Product';
import './ProductList.css'; // Import the CSS file

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch products whenever searchTerm changes
    useEffect(() => {
        const fetchProducts = async () => {
            if (searchTerm) {
                // Call the search endpoint if searchTerm is not empty
                const data = await searchProducts(searchTerm, 0, 10); // Fixed page and size for simplicity
                setProducts(data);
            } else {
                // Call the all products endpoint if searchTerm is empty
                const data = await getAllProducts(0, 10); // Fixed page and size for simplicity
                setProducts(data);
            }
        };

        fetchProducts();
    }, [searchTerm]); // Re-run effect when searchTerm changes

    return (
        <div className="product-list-container">
            <h1>Product List</h1>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found. Try searching for something!</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;