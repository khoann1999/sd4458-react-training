import { useState, useCallback } from 'react';
import { getUsers, getUserById } from '../services/UserApi';
import React from 'react';

export function useGetUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [limit, setLimit] = useState<number>(10);
  const [skip, setSkip] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const fetchUsers = useCallback(async (newSkip: number = 1, newLimit: number = 10) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getUsers(newSkip, newLimit);
      setUsers(result.users);
      setLimit(result.limit);
      setSkip(result.skip);
      setTotal(result.total);
      return result;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, error, limit, skip, total, fetchUsers };
}

export function useGetUserById(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUserById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getUserById(id);
      setUser(result);
      return result;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    if (id) {
      fetchUserById(id);
    }
  }, [id, fetchUserById]);

  return { user, loading, error, fetchUserById };
}

interface User {
  id: string;
  avatar?: string;
  name?: string;
  email?: string;
  position?: string;
  biography?: string;
  city?: string;
  country?: string;
  phone?: string;
  company?: string;
  status?: string;
}