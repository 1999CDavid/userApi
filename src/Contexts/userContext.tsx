import { createContext } from "react";
import { UsersContextProps } from "../types";

const UserContext = createContext<UsersContextProps | undefined>(undefined);


export default UserContext