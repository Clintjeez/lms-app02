import React from 'react'
import { Tabs } from 'antd';
import { Upload, message, Input, Row, Col, Button} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

import "./Account.scss"
import ChangePassword from "../../../../components/ChangePassword/ChangePassword";

const { TabPane } = Tabs;

const Account = () => {
  return (
    <div className="account container">
      <h2 className="account-title">Account</h2>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Account Update" key="1">
            <AccountUpdate />
          </TabPane>
          <TabPane tab="Account Security" key="2">
            <ChangePassword />
          </TabPane>
          <TabPane tab="Account Notifications" key="3"></TabPane>
          <TabPane tab="Delete Account" key="4"></TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Account

export const AccountUpdate = () => {
    return (
        <div className="account-update">
            <div className="profile-avater">
            <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        //beforeUpload={beforeUpload}
       // onChange={this.handleChange}
      >
        {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
      </Upload>
            </div>
            <div className="account-form">
                <Row gutter={50}>
                    <Col>
                    <div className="form-group">
                    <label>First Name</label>
                    <Input className="inputs" placeholder="Auth User" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <Input className="inputs" placeholder="Auth User" />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <Input className="inputs" placeholder="Auth User" />
                </div>
                
                   
                    </Col>
                  
                    <Col>
                    <div className="form-group">
                    <label>Telephone</label>
                    <Input className="inputs" placeholder="Auth User" />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <Input className="inputs" placeholder="Auth User" />
                </div>
                <div className="form-group">
                <button className="btn" type="primary">Update Account</button>
                </div>
                    </Col>
                </Row>
                
            </div>
        </div>
    )
}
