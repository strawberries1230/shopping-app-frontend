import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { forceLogout } from "../service/authService";
const AuthContext = createContext();

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isForcedLogout, setIsForcedLogout] = useState(false);
  //   const navigate = useNavigate();
  useEffect(() => {
    // 发送一个请求到后端验证端点来确认当前的JWT或session是否有效
    axios
      .get("https://localhost/api/users/validate-token")
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedIn(true);
        } else {
          //   setIsLoggedIn(false);
          forceLogout(setIsLoggedIn, setIsForcedLogout);
        }
      })
      .catch((error) => {
        // setIsLoggedIn(false);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          forceLogout(setIsLoggedIn, setIsForcedLogout);
        }
        forceLogout(setIsLoggedIn, setIsForcedLogout);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isForcedLogout,
        setIsForcedLogout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
