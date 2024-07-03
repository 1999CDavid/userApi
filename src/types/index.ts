export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone:string;
    website:string;
  }
  
export interface UsersContextProps {
    users: User[];
    loading: boolean;
    error: string | null;
    fetchUsers: () => void;
  }