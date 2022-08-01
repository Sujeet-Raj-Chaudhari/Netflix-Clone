import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          exact
          path="/"
          element={
            <Fragment>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Home />
              </div>
            </Fragment>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <Fragment>
              <Topbar />
              <div className="container">
                <Sidebar />
                <UserList />
              </div>
            </Fragment>
          }
        ></Route>
        <Route
          path="/user/:userId"
          element={
            <Fragment>
              <Topbar />
              <div className="container">
                <Sidebar />
                <User />
              </div>
            </Fragment>
          }
        ></Route>
        <Route
          path="/newUser"
          element={
            <Fragment>
              <Topbar />
              <div className="container">
                <Sidebar />
                <NewUser />
              </div>
            </Fragment>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Fragment>
              <Topbar />
              <div className="container">
                <Sidebar />
                <ProductList />
              </div>
            </Fragment>
          }
        ></Route>
        <Route
          path="/product/:productId"
          element={
            <Fragment>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Product />
              </div>
            </Fragment>
          }
        ></Route>
        <Route
          path="/newproduct"
          element={
            <Fragment>
              <Topbar />
              <div className="container">
                <Sidebar />
                <NewProduct />
              </div>
            </Fragment>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
