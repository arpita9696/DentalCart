import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../utils/api';
// hooks/useLogin.ts
import { useState } from 'react';

interface LoginPayload {
  recipient: string;
  action: 'login';
  verification_type: 'password' | 'otp';
  authentication_type: 'email' | 'mobile';
  credential: string;
  new_password?: string;
}

interface ApiResponse {
  status: string;
  message: string;
  data?: any;
}

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post<ApiResponse>(
        '/customers/auth/verify',
        payload,
      );
      setResponse(res.data);
      await AsyncStorage.setItem('token', res.data?.token);

      return res.data;
    } catch (err: any) {
      const errorMsg = err?.response?.data?.message || 'Login failed';
      setError(errorMsg);
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, response };
};
