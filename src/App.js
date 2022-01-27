import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AddBlog from "./pages/adminPanel/AddBlog/AddBlog";
import AdminPanel from "./pages/adminPanel/AdminPanel/AdminPanel";
import CreateBlog from "./pages/adminPanel/CreateBlog/CreateBlog";
import ManageBlog from "./pages/adminPanel/ManageBlog/ManageBlog";
import ManageService from "./pages/adminPanel/ManageService/ManageService";
import AvailableServices from "./pages/ExploreService/AvailableServices/AvailableServices";
// import AdminPanel from "./pages/adminPanel/AdminPanel/AdminPanel";
import Home from "./pages/home/Home/Home";
import Login from "./pages/login/Login/Login";
import PrivetRoute from "./pages/login/PrivetRoute/PrivetRoute";
import Register from "./pages/login/Register/Register";
import SingleBlog from "./pages/singlePages/SingleBlog/SingleBlog";
import SingleService from "./pages/singlePages/SingleService/SingleService";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createBlog" element={<CreateBlog />} />
      <Route path="/blogDetails/:BlogId" element={<SingleBlog />} />
      <Route path="/serviceDetails/:BlogId" element={<SingleService />} />
      <Route path="/adminPanel" element={<AdminPanel />} />
      <Route path="/addBlog" element={<AddBlog />} />
      <Route path="/manageService" element={<ManageService />} />
      <Route path="/manageBlog" element={<ManageBlog />} />
      <Route path="/availableServices" element={<AvailableServices />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* <Route path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } /> */}


    </Routes>
  </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
