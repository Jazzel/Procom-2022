import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import store from "./store";
import About from "./views/About";
import Contact from "./views/Contact";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import Login from "./views/Login";
import React from "react";
import Register from "./views/Register";
import { loadUser } from "./actions/auth";

const App = () => {
  React.useEffect(() => {
    console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user")) store.dispatch(loadUser());
  }, [localStorage.getItem("user")]);
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
