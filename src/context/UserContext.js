import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", phone: "", email: "" });
  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    if (user.name === "" || user.phone === "" || user.email === "") {
      setIsUserValid(false);
    } else {
      setIsUserValid(true);
    }
  }, [user]);

  const updateUser = (newUser) => {
    setUser((prevUser) => ({ ...prevUser, ...newUser }));
  };

  return (
    <UserContext.Provider
      value={{
        updateUser,
        isUserValid,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
