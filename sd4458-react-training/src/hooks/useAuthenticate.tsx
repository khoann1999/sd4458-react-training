import { useState, useCallback } from 'react';
import { getUser, postLogin } from '../services/AuthenticateApi';

export function useGetUser() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getUser();
      setUser(result);
      return result;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading, error, fetchUser };
}

export function usePostLogin() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (loginData: any) => {
    setLoading(true);
    setError(null);
    try {
      const result = await postLogin(loginData);
      setData(result);
      return result;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, login };
}
