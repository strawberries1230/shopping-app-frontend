// AuthToastContext.js
import React, { createContext, useContext, useState } from "react";

const AuthToastContext = createContext();

function AuthToastProvider(props) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  return (
    <AuthToastContext.Provider
      value={{
        openSnackbar,
        setOpenSnackbar,
        snackbarMessage,
        setSnackbarMessage,
        alertType,
        setAlertType,
      }}
    >
      {props.children}
    </AuthToastContext.Provider>
  );
}

const useAuthToast = () => {
  return useContext(AuthToastContext);
};
export { AuthToastProvider, useAuthToast };
