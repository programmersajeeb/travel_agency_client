import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBlog from "./pages/adminPanel/AddBlog/AddBlog";
import AdminPanel from "./pages/adminPanel/AdminPanel/AdminPanel";
import CreateBlog from "./pages/adminPanel/CreateBlog/CreateBlog";
import ManageService from "./pages/adminPanel/ManageService/ManageService";
// import AdminPanel from "./pages/adminPanel/AdminPanel/AdminPanel";
import Home from "./pages/home/Home/Home";
import SingleBlog from "./pages/singlePages/SingleBlog/SingleBlog";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adminPanel" element={<AdminPanel />} />
      <Route path="/addBlog" element={<AddBlog />} />
      <Route path="/createBlog" element={<CreateBlog />} />
      <Route path="/blogDetails/:BlogId" element={<SingleBlog />} />
      <Route path="/manageService" element={<ManageService />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
