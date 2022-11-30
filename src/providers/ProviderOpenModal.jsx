import { createContext, useContext, useState } from "react";

export const OpenModalContext = createContext();

export const OpenModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <OpenModalContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </OpenModalContext.Provider>
  );
};

export const UseOpenModal = () => useContext(OpenModalContext);
