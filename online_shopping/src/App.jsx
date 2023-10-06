import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"
import CartPage from "./pages/CartPage"
import ItemDetailPage from "./pages/ItemDetailPage"
import LoginPage from "./pages/LoginPage"
import CategoryPage from "./pages/CategoryPage"
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import WishlistPage from "./pages/WishlistPage";
import FetchDataFromApi from "./Api/FetchDataFromApi";
import { useContext } from "react";
import { Context } from "./Context";
import { useEffect } from "react";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {

  const { setAllData, setAllCategory, setError, error, setLoading, loading } = useContext(Context);

  useEffect(() => {

    setLoading(true);

    FetchDataFromApi("products?skip=0&limit=100").then((res) => {
      setAllData(res.data.products);
      setError(false);

    }).catch((err) => {

      setError(true);
      console.log(err);
      console.log("error in getting all products");

    });


    FetchDataFromApi("products/categories").then((res) => {
      setAllCategory(res.data);

    }).catch((err) => {

      setError(true);
      console.log(err);
      console.log("error in getting all categories");

    });

    setLoading(false);

  }, []);



  return (
    <div className="min-h-screen relative">

      {
        loading ? (<Loader></Loader>) : (
          error ? (<ErrorPage></ErrorPage>) : (
            <>
              {/* Navbar Section */}
              <div className="fixed z-10 bg-white w-full">
                <Navbar />
              </div>
              <div className="pt-24">
                <Routes>
                  <Route path="/" element={<HomePage></HomePage>} />
                  <Route path="/about" element={<AboutPage></AboutPage>} />
                  <Route path="/cart" element={<CartPage></CartPage>} />
                  <Route path="/product/:id" element={<ItemDetailPage></ItemDetailPage>} />
                  <Route path="/login" element={<LoginPage></LoginPage>} />
                  <Route path="/wishlist" element={<WishlistPage></WishlistPage>} />
                  <Route path="/signup" element={<SignUpPage></SignUpPage>} />
                  <Route path="/category/:category" element={<CategoryPage></CategoryPage>} />
                  <Route path="/search/:query" element={<CategoryPage></CategoryPage>} />
                  <Route path="/checkout" element={<CheckoutPage></CheckoutPage>} />

                </Routes>

              </div>
            </>

          )
        )

      }

    </div>
  );
}

export default App;


