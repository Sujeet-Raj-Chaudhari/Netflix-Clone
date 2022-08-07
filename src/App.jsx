import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./authContext/AuthContext";
import "./app.scss";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Watch from "./Pages/watch/Watch";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        ></Route>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        ></Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        ></Route>
        {user && (
          <>
            <Route exact path="/movies" element={<Home type="movie" />}></Route>
            <Route
              exact
              path="/series"
              element={<Home type="series" />}
            ></Route>
            <Route exact path="/watch" element={<Watch />}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
