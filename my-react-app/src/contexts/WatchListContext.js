import React, { createContext, useContext, useState } from "react";

const WatchListContext = createContext();

export function useProduct() {
  return useContext(WatchListContext);
}

export function WatchListProvider({ children }) {
  const [currentProducts, setCurrentProducts] = useState([]);

  return (
    <WatchListContext.Provider value={{ currentProducts, setCurrentProducts }}>
      {children}
    </WatchListContext.Provider>
  );
}
