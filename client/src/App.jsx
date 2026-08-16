import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Auth from './pages/Auth'
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import FoodDetails from "./pages/foodDetails";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import Dashboard from "./pages/admin/Dashboard";
import Foods from "./pages/admin/Foods";
import Orders from "./pages/admin/Orders";
import Analytics from "./pages/admin/Analytics";


const App = () => {
  return (
    <Routes>
      {/* HOME ROUTES */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
      </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/food/:id" element={<FoodDetails />}/>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-orders" element={<MyOrders />} />

      {/* AUTH ROUTES */}
      <Route path="/auth" element={<Auth/>}/>

      <Route path="/admin" element={<Dashboard/>} />
      <Route path="/admin/foods" element={<Foods/>} />
      <Route path="/admin/orders" element={<Orders/>} />
      <Route path="/admin/analytics" element={<Analytics />} />  
          
    </Routes>

    
  );
};

export default App;
