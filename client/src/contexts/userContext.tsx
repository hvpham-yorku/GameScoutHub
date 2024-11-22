import { createContext, useState } from "react";

interface IUserContext {
  userInfo: any;
  setUserInfo: React.Dispatch<React.SetStateAction<any>>;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userInfo, setUserInfo] = useState();

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
