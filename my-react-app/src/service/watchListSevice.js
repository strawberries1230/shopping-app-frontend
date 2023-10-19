import axios from "axios";
import { forceLogout } from "./authService";
const removeWatchListFromDatabase = async (
  productId,
  setIsLoggedIn,
  currentProducts,
  setCurrentProducts,
  setIsForcedLogout
) => {
  try {
    await axios.post(
      `https://localhost/api/products/watchlist/remove/${productId}`
    ); // 根据你的API路径来调整
    const updatedProducts = currentProducts.filter(
      (product) => product.product_id !== productId
    );
    setCurrentProducts(updatedProducts);
  } catch (error) {
    console.error("Login error:", error);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      forceLogout(setIsLoggedIn, setIsForcedLogout);
    }
  }
};

const addWatchListFromDatabase = async (productId, setIsLoggedIn, setIsForcedLogout) => {
  try {
    await axios.post(
      `https://localhost/api/products/watchlist/add/${productId}`
    ); // 根据你的API路径来调整
  } catch (error) {
    console.error("Error adding product:", error);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      forceLogout(setIsLoggedIn, setIsForcedLogout);
    }
  }
};

const handleAddWatchList = (
  isLoggedIn,
  productId,
  setNotLoginWarning,
  setAddToList,
  setAdded,
  added,
  setIsLoggedIn,
  currentProducts,
  setCurrentProducts,
  setIsForcedLogout
) => {
  //login

  if (isLoggedIn) {
    //never added before
    if (!added) {
      addWatchListFromDatabase(productId, setIsLoggedIn, setIsForcedLogout);
      setAddToList(true);
      setAdded(true);
    }
    //added before, ready to cancel
    else {
      removeWatchListFromDatabase(
        productId,
        setIsLoggedIn,
        currentProducts,
        setCurrentProducts,
        setIsForcedLogout
      );
      setAddToList(false);
      setAdded(false);
    }
  }
  //not login
  else {
    setNotLoginWarning(true);
  }
};

const checkProductInWatchlist = async (
  productId,
  setAdded,
  setIsLoggedIn,
  setIsForcedLogout
) => {
  try {
    const response = await axios.get(
      `https://localhost/api/products/watchlist/exist/${productId}`
    );
    console.log("checklist response: ", response);
    if (response.status === 200) {
      setAdded(response.data);
    }
  } catch (error) {
    console.error("Error checking product in watchlist:", error);
    setAdded(false);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      forceLogout(setIsLoggedIn, setIsForcedLogout);
    }
  }
};

export {
  removeWatchListFromDatabase,
  addWatchListFromDatabase,
  handleAddWatchList,
  checkProductInWatchlist,
};
