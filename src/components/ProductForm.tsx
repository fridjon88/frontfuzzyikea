// src/components/ProductForm.tsx
import React, { useState } from 'react';
import { createProduct } from '../services/productService.ts';
import { Product } from '../types/Product';

const ProductForm: React.FC = () => {
    const [product, setProduct] = useState<Omit<Product, 'id'>>({
        name: '',
        category: '',
        description: '',
        price: 0,
        imageUrl: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newProduct = await createProduct(product as Product);
        console.log('Product created:', newProduct);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Product</h2>
            <input
                type="text"
                placeholder="Name"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Category"
                value={product.category}
                onChange={(e) => setProduct({ ...product, category: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: +e.target.value })}
            />
            <input
                type="text"
                placeholder="Image URL"
                value={product.imageUrl}
                onChange={(e) => setProduct({ ...product, imageUrl: e.target.value })}
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default ProductForm;