import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import ListList from "./pages/listList/ListList";
import NewList from "./pages/newList/NewList";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import { Fragment, useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        {user && (
          <>
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
            <Route
              path="/lists"
              element={
                <Fragment>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <ListList />
                  </div>
                </Fragment>
              }
            ></Route>
            <Route
              path="/list/:listId"
              element={
                <Fragment>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <List />
                  </div>
                </Fragment>
              }
            ></Route>
            <Route
              path="/newlist"
              element={
                <Fragment>
                  <Topbar />
                  <div className="container">
                    <Sidebar />
                    <NewList />
                  </div>
                </Fragment>
              }
            ></Route>
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
