import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert as AlertMsg } from "@mui/material/";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertMsg key={alert.id} severity={alert.alertType}>
      {alert.msg}
    </AlertMsg>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
