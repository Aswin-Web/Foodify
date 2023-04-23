import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LandingPage from "../src/components/LandingPage/main";
import AboutPage from "./components/AboutPage/main";
import ShopPage from './components/Shop/main'

import { Routes, Route } from "react-router-dom";
import User from "./components/UserComponent/User";
import Item from "./components/Shop/item.about";
import Cart from "./components/Cart/main";
import AdminBase from "./components/Admin/AdminBase";
import TrafficModule from "./components/Admin/Traffic.module";
import OrderModule from "./components/Admin/Order.module";
import ProductModule from "./components/Admin/Product.module";
import NotificationModule from "./components/Admin/Notification.module";
import CouponModule from "./components/Admin/CouponModule";
import LogoutModule from "./components/Admin/LogoutModule";
import OrderInfo from "./components/Admin/OrderInfo";
import Profile from "./components/Profile/main";
import Wishlist from "./components/Profile/Wishlist";
import Order from "./components/Profile/Order";
import IndividualOrder from "./components/Profile/IndividualOrder";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* User Routes */}
        <Route element={<User />}>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/*" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/*" element={<IndividualOrder />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminBase />}>
          <Route index element={<TrafficModule />} />
          <Route path="order" element={<OrderModule />} />
          <Route path="order/*" element={<OrderInfo />} />
          <Route path="products" element={<ProductModule />} />
          <Route path="notification" element={<NotificationModule />} />
          <Route path="coupon" element={<CouponModule />} />
          <Route path="logout" element={<LogoutModule />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
