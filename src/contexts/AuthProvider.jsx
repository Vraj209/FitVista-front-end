import React, { createContext, useState, useMemo } from 'react';

const AuthContext = createContext({
  auth: null,  // You can define a more specific structure based on your needs
  setAuth: () => {}
});

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ userData: null, accessToken: null });

  const value = useMemo(() => ({ auth, setAuth }), [auth]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
