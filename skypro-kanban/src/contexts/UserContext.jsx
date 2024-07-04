import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getUserFromLocalStorage,
  saveUserToLocalStorage,
} from "../lib/helpers";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  useEffect(() => {
    saveUserToLocalStorage(user);
  });

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
