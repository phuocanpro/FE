import HomePage from "../pages/HomePage/HomePage.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import OrderPage from "../pages/OrderPage/OrderPage.jsx";
import ProductsPage from "../pages/ProductsPage/ProductsPage.jsx";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage.jsx";
import SignInPage from "../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage.jsx";
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
    path: "/product-details",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
    isShowHeader: false,
  },
];
