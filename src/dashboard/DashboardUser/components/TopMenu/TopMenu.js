import React from "react";
import { Link} from "react-router-dom";
import { Badge, Avatar } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

import "./TopMenu.scss"

function TopMenu() {
  return (
    <div className="top-menu container ">
        <div className="menu-wrapper">
            <h3 className="user-title">Hello User</h3>
            <div className="menu-group">
              <div className="menu-actions">
                <div>
                <Badge dot>
                  <NotificationOutlined style={{ fontSize: 16 }} />
               </Badge>
                </div>
                <div>
                <Badge count={5}>
                 <Avatar shape="square" size="large" />
                </Badge>
                </div>
              </div>
              <Link to="/">Become an Instructor</Link>
            </div>
        </div>
    </div>
  );
}

export default TopMenu;
