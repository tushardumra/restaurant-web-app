import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Auth from './pages/Auth'
import RegisterForm from "./components/auth/RegisterForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Auth/>}/>
        {/* <Route path="/register" element={<RegisterForm/>}/> */}
      </Route>
    </Routes>
  );
};

export default App;
