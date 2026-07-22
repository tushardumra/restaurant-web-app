import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Auth from './pages/Auth'
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";

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

      {/* AUTH ROUTES */}
      <Route path="/auth" element={<Auth/>}/>
      
    </Routes>

    
  );
};

export default App;
