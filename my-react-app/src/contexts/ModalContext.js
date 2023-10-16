// modalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
      {children}
    </ModalContext.Provider>
  );

//   const contextValue = {
//     isModalOpen,
//     openModal: () => setIsModalOpen(true),
//     closeModal: () => setIsModalOpen(false)
//   };

//   return (
//     <ModalContext.Provider value={contextValue}>
//       {children}
//     </ModalContext.Provider>
//   );
}
