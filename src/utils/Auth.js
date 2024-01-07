import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userFirstName, setUserFirstName] = useState('');

  const login = (firstName) => {
    setIsAuthenticated(true);
    setUserFirstName(firstName);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserFirstName('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userFirstName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
