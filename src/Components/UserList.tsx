import { useUsersContext } from '../Providers/userProvider'; 


const UserList = () => {
    const { users, loading, error, fetchUsers } = useUsersContext();
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return (
          <div>
            <p>Error: {error}</p>
            <button onClick={fetchUsers}>Retry</button>
          </div>
        );
      }
    

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            name: {user.name}<br/>
            username:{user.username} <br/>
            email: {user.email} <br/>
            phone:{user.phone} <br/>
            website:{user.website} <br/>
          </li>
        
        ))}
      </ul>
    </div>
  );
};

export default UserList