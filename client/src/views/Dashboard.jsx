import React from "react";
import Boards from "../components/Dashboard/Boards";
import Layout from "../components/Dashboard/Layout";

const boards = [
  { id: 1, name: "Board 1" },
  { id: 2, name: "Board 2" },
];

const Dashboard = () => {
  return (
    <Layout>
      <Boards name={"Board 1"} id={1} />
    </Layout>
  );
};

export default Dashboard;
