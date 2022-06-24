import React, { useState, useEffect } from "react";
import { User } from "../entities";
import { UserAction } from "../actions/user.action";

interface AppHookProps {
  user: User;
};

export const AppContext = React.createContext<AppHookProps>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>();

  const userAction = new UserAction();
  useEffect(() => {
    (async () => {
      const user = await userAction.getProfile();
      if (user) {
        setUser(user);
      }
    })();
  }, []);

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
