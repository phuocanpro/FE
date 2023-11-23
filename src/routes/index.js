import HomePage from "../pages/HomePage/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import OrderPage from "../pages/OrderPage/OrderPage.jsx";
import ProductsPage from "../pages/ProductsPage/ProductsPage.jsx";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage.jsx";
import SignInPage from "../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx";
import GameDetailsPage from "../pages/GameDetailsPage/GameDetailsPage.jsx";
<<<<<<< HEAD

// import 
=======
import ProfilePage from "../pages/Profile/ProfilePage.jsx";
import CartPage from "../pages/CartPage/Cart1.jsx";
>>>>>>> a83b252bad918825da02b12de1b9549157243549
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
  },
  {
    path: "/type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/game-details",
    page: GameDetailsPage,
    isShowHeader: true,
  },
<<<<<<< HEAD
  
=======
  {
    path: "/profile-user",
    page: ProfilePage,
    isShowHeader: true,
  },
  {
    path: "/carts",
    page: CartPage,

    isShowHeader: true,
  },
>>>>>>> a83b252bad918825da02b12de1b9549157243549
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: false,
  },
];
