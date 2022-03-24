import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import Layout from "../components/Home/Layout";
import { Button, Container, TextField, Typography } from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const Login = ({ login, isAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  // Redirect if logged in
  if (isAuthenticated) {
    navigate("/dashboard");
  }
  return (
    <Layout>
      <Container style={{ marginTop: 20 }}>
        <Typography variant="h3">Sign In</Typography>
        <hr />
        <br />
        <PersonRoundedIcon style={{ float: "left" }} />
        <Typography style={{ float: "left" }} variant="body1">
          Sign Into Your Account
        </Typography>
        <br />
        <br />
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <TextField
              style={{ width: "50%" }}
              required
              id="email"
              label="Email"
              type="email"
              placeholder="Email Address"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              style={{ width: "50%" }}
              required
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <br />

          <Button type="submit" style={{ float: "left" }}>
            Login
          </Button>
          <Typography
            variant="body2"
            style={{ float: "left", paddingTop: "7.5px", marginLeft: 20 }}
          >
            Already have an account? <Link to="/register">Sign Up</Link>
          </Typography>
          <br />
          <br />
          <br />
        </form>
      </Container>
    </Layout>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
