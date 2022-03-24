import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import { register } from "../actions/auth";
import PropTypes from "prop-types";
import Layout from "../components/Home/Layout";
import { Button, Container, TextField, Typography } from "@mui/material";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { first_name, last_name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match", "error");
    } else {
      register({ first_name, last_name, email, password });
      navigate("/");
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    Navigate("/");
  }
  return (
    <Layout>
      <Container style={{ marginTop: 20 }}>
        <Typography variant="h3">Sign Up</Typography>
        <hr />
        <br />
        <PersonRoundedIcon style={{ float: "left" }} />
        <Typography style={{ float: "left" }} variant="body1">
          Create Your Account
        </Typography>
        <br />
        <br />
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <TextField
              style={{ width: "50%" }}
              required
              id="first_name"
              label="First Name"
              type="text"
              placeholder="First Name"
              value={first_name}
              name="first_name"
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              style={{ width: "50%" }}
              required
              id="last_name"
              label="Last Name"
              type="text"
              placeholder="Last Name"
              value={last_name}
              name="last_name"
              onChange={(e) => onChange(e)}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              style={{ width: "50%" }}
              required
              id="email"
              label="Email"
              type="email"
              placeholder="Email"
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
          <div className="form-group">
            <TextField
              style={{ width: "50%" }}
              required
              id="password2"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={password2}
              name="password2"
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <br />
          <Button type="submit">Register</Button>
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </Container>
    </Layout>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
