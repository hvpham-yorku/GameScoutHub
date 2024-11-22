import { createContext, useState } from "react";

interface IUserContext {
  userInfo: any;
  setUserInfo: React.Dispatch<React.SetStateAction<any>>;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
