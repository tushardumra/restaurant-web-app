import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me",
          {
            credentials: 'include',
          }
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        setUser(data.user);

      } catch (error) {
        console.log(error);
      } finally {
        setAuthLoading(false);
      }
    };
    checkAuth();
  },[]);

  return (
    <AuthContext.Provider
      value={{
        user, setUser, authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
