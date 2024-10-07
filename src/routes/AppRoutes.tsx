import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Login from "../pages/login/Login";
import Blogs from "../pages/Blogs";
import Profile from "../pages/Profile";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
