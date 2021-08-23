import React from "react";
import { Row, Col } from "antd";

import TopMenu from "./components/TopMenu/TopMenu";
import SideMenu from "./components/SideMenu/SideMenu";
import MainView from "./MainView";

import "./DashboardUser.scss";

const StudentDashboard = () => {
  return (
    <>
      <div className="dashboard">
        <aside className="aside-wrapper">
          <SideMenu />
        </aside>
        <main className="main-wrapper">
        <TopMenu />
        <MainView />
        </main>
        
      </div>
    </>
  );
};

export default StudentDashboard;
