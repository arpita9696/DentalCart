import { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../utils/api';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  // Add more fields as per your response structure
  [key: string]: any;
}

export const useProduct = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string>('');
  const productId = 32233;

  useEffect(() => {
    const getToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) setToken(storedToken);
    };
    getToken();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://apis.dentalkart.com/node_svlss/api/v1/products/32233/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setProduct(response.data);
      } catch (err: any) {
        setError(err?.response?.data?.message || 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    if (productId && token) {
      fetchProduct();
    }
  }, [productId, token]);

  return { product, loading, error };
};
