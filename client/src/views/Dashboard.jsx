import React from "react";
import Boards from "../components/Dashboard/Boards";
import Layout from "../components/Dashboard/Layout";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getData } from "./../actions/board";
import { loadUser } from "../actions/auth";

const boards = [
  { id: 1, name: "Board 1" },
  { id: 2, name: "Board 2" },
];

const Dashboard = ({
  getData,
  auth: { user },
  board: {
    data: { data },
  },
}) => {
  React.useEffect(() => {
    loadUser();
    if (user) {
      if (user.id || JSON.parse(localStorage.getItem("user").id)) {
        getData(3, "all", "all");
      }
    }
  }, [user]);

  return (
    <Layout boardUser={data.BoardUser[0]}>
      {data && (
        <Boards
          name={data.name}
          id={data.id}
          data={data.List}
          nonBoardUser={data.NonBoardUser}
        />
      )}
    </Layout>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  data: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  board: state.board,
});

export default connect(mapStateToProps, { getData })(Dashboard);
