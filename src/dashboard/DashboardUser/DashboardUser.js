import React from "react";
import { Row, Col } from "antd";

import TopMenu from "./components/TopMenu/TopMenu";
import SideMenu from "./components/SideMenu/SideMenu";
import MainView from "./MainView";

import "./DashboardUser.scss";

const StudentDashboard = () => {
  return (
    <>
      <Row>
        <Col span="6">
          <SideMenu />
        </Col>
        <Col span="18">
          <Row>
            <Col span="24">
              <TopMenu />
              HELLO
            </Col>
            <Col span="">
              <MainView />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default StudentDashboard;
