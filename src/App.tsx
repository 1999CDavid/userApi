import React from "react";
import { UserProvider } from "./Providers/userProvider";
import UserList from "./Components/UserList";

const App: React.FC = () => {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
};

export default App;
