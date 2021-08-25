



import { Input, Card, Button, notification } from "antd";
import { useState } from "react";
import { baseUrl } from "../../services/urls";
import { } from ".."
import axios from "axios";


const defaultState = { email: "" };

export default function DeleteAccount() {

    const [state, setState] = useState(defaultState);


    const onInputChange = ({ target: e }) => {
        const name = e.name;
        const val = e.value;
        const data = { ...state, [name]: val };

        setState(data);
    }

    const onComplete = (status) => {

        if (status) {
            setState(defaultState);
        }
        notification.open({
            message: 'Account Deleted Successfully' + (status ? 'was successful' : 'failed'),
            description:
                'This action is permanent',
            onClick: () => {

            },
        });
    }

    async function onSubmit(form) {
        form.preventDefault();


        const url = baseUrl + "​api/UserManager/DeleteUser";

        const payload = {
            Email: state.email
        }

        // const headers = {authroization:}

        const { data: { status, data, message } } = await axios.delete(url, { data: payload });

        onComplete(status);

    }

    return <>
        <div className="container-fluid">
            <div className="row justify-content-center bg-danger">
                <div className="col-sx-12 col-md-6 col-lg-5  ">
                    <div className="site-card-border-less-wrapper">
                        <Card title="Delete Account" bordered={false}>
                            <small>This action is permanent</small>
                            <br />
                            <br />

                            <form onSubmit={onSubmit}>
                                <label htmlFor="email">Enter Your Email Address</label>
                                <Input type="email" id="email" name="email" value={state.email} onChange={onInputChange} placeholder="Email" required />
                                <br />
                                <br />

                                <Button type="primary" htmlType="submit" style={{ color: "#fff" }}>Delete Account</Button>


                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </>
}







