import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./app.scss";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Watch from "./Pages/watch/Watch";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/home" />}
        ></Route>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Navigate to="/register" />}
        ></Route>
        <Route
          to="/login"
          element={!user ? <Login /> : <Navigate to="/home" />}
        ></Route>
        {user && (
          <>
            <Route
              exact
              path="/movies"
              element={<Home type="movies" />}
            ></Route>
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
