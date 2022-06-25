import React, { useState, useEffect } from "react";
import { User } from "../entities";
import { UserAction } from "../actions/user.action";
import { useRouter } from "next/router";

const authorizedRouters = ["/profile"];
const unAuthorizedRouters = ["/login", "/register"];

interface AppHookProps {
  user: User;
};

export const AppContext = React.createContext<AppHookProps>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter(); 
  const [user, setUser] = useState<User>();

  const userAction = new UserAction();
  useEffect(() => {
    (async () => {
      const user = await userAction.getProfile();
      if (user) {
        setUser(user);
        if (unAuthorizedRouters.filter((item) => item === router.asPath).length) {
          router.push("/");
        }
        return;
      }

      if (authorizedRouters.filter((item) => item === router.asPath).length) {
        router.push("/login");
      }
    })();
  }, [router.asPath]);

  return (
    <AppContext.Provider value={{
      user,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("Must be in hook");
  }
  return context;
};
