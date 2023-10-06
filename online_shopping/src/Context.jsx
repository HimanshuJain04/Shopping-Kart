import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const Context = createContext();

const AppContext = ({ children }) => {

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [dataId, setDataId] = useState(0);
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [quickViewData, setQuickViewData] = useState([]);
  const [quickView, setQuickView] = useState(false);

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => (total += item.quantity * item.price));
    setTotalAmount(total);
  }, [cartItems]);

  const handleAddToCart = (product) => {

    if (login) {

      let item = [...cartItems];
      const index = cartItems.findIndex((item) => item.id === product.id);

      if (index === -1) {
        product.quantity = 1;
        item = [...item, product];
      } else {
        item[index].quantity += 1;
      }
      setCartItems(item);

    } else {
      navigate("/login");
    }

  };

  const handleWishList = (product) => {

    if (login) {

      let item = [...wishListItems];
      let flag = false;

      // Check item is already exist in wishlist or not
      wishListItems.forEach((item) => {
        if (item.id === product.id) {
          // exist
          flag = true;
          return;
        }
      })


      if (flag) {
        // remove from wishlist
        item = item.filter((p) => p.id !== product.id);
        setWishListItems(item);

      } else {
        // Add to wishlist 
        item = [...item, product];
        setWishListItems(item);
      }

    } else {
      navigate("/login");
    }

  };

  const handleAllRemoveFromCart = (product) => {
    let item = [...cartItems];
    item = item.filter((p) => p.id !== product.id);
    setCartItems(item);
  };

  const handleRemoveFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    let item = [...cartItems];

    if (item[index].quantity === 1) {
      handleAllRemoveFromCart(product);
    } else {
      item[index].quantity -= 1;
      setCartItems(item);
    }
  };

  return (
    <Context.Provider
      value={{
        wishListItems,
        setAllCategory,
        handleWishList,
        dataId,
        setDataId,
        allCategory,
        allData,
        setAllData,
        quickViewData,
        setQuickViewData,
        cartItems,
        login,
        setLogin,
        setCartCount,
        quickView,
        setQuickView,
        cartCount,
        handleAddToCart,
        handleRemoveFromCart,
        handleAllRemoveFromCart,
        totalAmount,
        error,
        setError,
        setLoading,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
