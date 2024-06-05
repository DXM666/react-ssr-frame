import * as React from "react";

// 客户端的 context  只需要创建一次，在页面整个生命周期内共享
declare const window: any;

export const BuildView =
  (App: React.FC): React.FC =>
  () => {
    const GlobalContext = React.createContext({});
    const initialValue =
      typeof window === "undefined" ? {} : window.__INITIAL_DATA__ ?? {};

    return (
      <GlobalContext.Provider value={initialValue}>
        <App/>
      </GlobalContext.Provider>
    );
  };
