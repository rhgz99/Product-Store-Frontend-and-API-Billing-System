import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState({});
  const [isAccountCreated, setIsAccountCreated] = useState(false)
  const [error, setError] = useState(null);

  const checkSession = () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setUserToken({});
        return;
      }

      setUserToken({ token });
    } catch (error) {
      setError("No active session", error);
      setUserToken({});
    } finally {
      setLoading(false);
    }
  };

  const signIng = (data) => {
    if (data?.token) {
      const { token } = data;

    localStorage.setItem("token", token);
    setUserToken({ token });
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");

    setUserToken({});
  };

  const isAuthenticated = () => !!userToken?.token;

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userToken,
        loading,
        error,
        isAccountCreated,
        setIsAccountCreated,
        checkSession,
        signIng,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
