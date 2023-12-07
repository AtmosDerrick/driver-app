import { React, createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("work");
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [signin, setSignin] = useState(false);

  useEffect(() => {
    console.log(signin);
  });

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, userInfo, setUserInfo, signin }}>
      {children}
    </UserContext.Provider>
  );
}
