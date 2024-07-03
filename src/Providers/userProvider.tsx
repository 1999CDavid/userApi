import React, { useState, useEffect, ReactNode } from 'react';
import UserContext from '../Contexts/userContext';
import { User, UsersContextProps } from "../types";

interface UsersProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); 
    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchUsers();
      }, []);
    
      return (
        <UserContext.Provider value={{ users, loading, error, fetchUsers }}>
          {children}
        </UserContext.Provider>
      );
    };
    
    // Hook para usar el contexto
    export const useUsersContext = (): UsersContextProps => {
      const context = React.useContext(UserContext);
      if (!context) {
        throw new Error('useUsersContext must be used within a UsersProvider');
      }
      return context;
    };

    