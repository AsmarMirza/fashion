
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/main/MainLayout";
import Home from "./pages/main/Home";
import Products from "./pages/main/Products";
import Basket from "./pages/main/Basket";
import WishList from "./pages/main/WishList";
import CoreProvider from "./context/CoreProvider";
import Employees from "./pages/admin/Employees";
import AddEmployees from "./pages/admin/AddEmployees";
import AdminLayout from "./layout/admin/AdminLayout";
import EditEmployee from "./pages/admin/EditEmployee";


function App() {


  return (
    <>
 <CoreProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishList" element={<WishList/>} />
        </Route>

        <Route path="/AdminLayout" element={<AdminLayout/>}>
        <Route path="/AdminLayout/editEmployee/:id" element={<EditEmployee />} />
          <Route path="/AdminLayout/employees" element={<Employees />} />
          <Route path="/AdminLayout/addemployees" element={<AddEmployees />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </CoreProvider>
    </>
  )
}

export default App
