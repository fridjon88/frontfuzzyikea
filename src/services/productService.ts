// src/services/productService.ts
import axios from 'axios';
import { Product } from '../types/Product';

const API_BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

export const createProduct = async (product: Product): Promise<Product> => {
    const response = await axios.post(`${API_BASE_URL}/products`, product);
    return response.data;
};

export const getAllProducts = async (page: number, size: number): Promise<Product[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`, {
        params: { page, size },
    });
    return response.data.content; // Assuming the response is paginated
};

export const searchProducts = async (search: string, page: number, size: number): Promise<Product[]> => {
    const response = await axios.get(`${API_BASE_URL}/search`, {
        params: { search, page, size },
    });
    return response.data.content; // Assuming the response is paginated
};

export const getProductById = async (id: number): Promise<Product> => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
};