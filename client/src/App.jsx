import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Auth from './pages/Auth'

const App = () => {
  return (
    <Routes>
      {/* HOME ROUTES */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* AUTH ROUTES */}
      <Route path="/auth" element={<Auth/>}/>
      
    </Routes>
  );
};

export default App;
