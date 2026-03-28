import { useState, useEffect } from 'react';
import { api } from '../api/axiosInstance';
import type { User } from '../types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await api.get('/users');
    setUsers(response.data);
  };

  const addUser = async (name: User['name']) => {
    const newUser = { name, role: 'User' };
    const response = await api.post('/users', newUser);
    setUsers([...users, response.data]);
  };

  const updateUserRole = async (id: User['id'], newRole: User['role']) => {
    const response = await api.patch(`/users/${id}`, { role: newRole });
    setUsers(users.map((user) => (user.id === id ? response.data : user)));
  };

  const deleteUser = async (id: User['id']) => {
    await api.delete(`/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return { users, addUser, updateUserRole, deleteUser };
};
