import React from "react";

import {
    Button,
    FormGroup,
    Form,
    Input,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { ActCreators } from "../redux/bindActionCreator";
import { connect } from "react-redux";
import { errorToaster, successToaster, } from "./common";
// import instance from "./axios";


import "../App.css";


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActCreators, dispatch);
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            Email: "",
            Password: "",
            fcm_registration_token: "",
            isSafari: false,
            fcm_flag: true,
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    // With Axios But getting Error so used Fetch method
    // onLogin = async () => {
    //     const response = await instance.post("/login", {
    //         headers: {
    //             Authkey: "Lopiuy4vQ74#1jGNr",
    //             "Content-Type": "application/json",
    //         },
    //     }).catch((error) => {
    //         // let errorMessage = error.response.data.error.message;
    //         // errorToaster(errorMessage);
    //     });
    //     if (response && response.data) {
    //         let userData = response.data;
    //         this.props.LOGIN_USER_DETAIL(userData);
    //     }
    // }

    onLogin = async () => {
        this.setState({
            loader: true,
        });
        let loginUserData = {
            username: this.state.Email,
            password: this.state.Password,
        };
        fetch("http://staging.webmynehost.com/consumercoverage/api/login", {
            method: "POST",
            headers: {
                Authkey: "Lopiuy4vQ74#1jGNr",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginUserData),
        }).then((response) => response.text())
            .then((responseText) => {
                responseText = JSON.parse(responseText);
                if (responseText.error) {
                    this.setState({
                        loader: false,
                    });
                    errorToaster("Invalid login credentials.");
                } else {
                    this.setState({
                        loader: false,
                    });
                    successToaster("Login Successfully");
                    let userData = responseText.responsedata;
                    this.props.LOGIN_USER_DETAIL(userData.userdata);
                    this.props.TOKEN_KEY(userData.session);
                    const { history } = this.props;
                    history.push("/dashboard");
                }
            })
            .catch((err) => { });
    };


    render() {
        const { Email, Password } = this.state;
        return (
            <Form className="login-form">
                <h1>
                    <span className="font-weight-bold">Practical Task</span>
                </h1>
                <h2 className="text-center">Welcome</h2>
                <FormGroup className="mb-3">
                    <Input
                        name="Email"
                        value={this.state.Email}
                        placeholder={"Email"}
                        type="email"
                        autoComplete="new-email"
                        onChange={(e) =>
                            this.handleChange(e)
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        name="Password"
                        placeholder={"Password"}
                        type="password"
                        autoComplete="new-password"
                        value={
                            this.state.Password
                        }
                        onChange={(e) =>
                            this.handleChange(e)
                        }
                    />
                </FormGroup>
                <div className="text-center">
                    <Button
                        className="btn-lg btn-dark btn-block mt-3 "
                        type="button"
                        disabled={!Email || !Password ? true : false}
                        onClick={() => this.onLogin()}>
                        {this.state.loader && <i class="fas fa-spinner fa-pulse"></i>}
                        {this.state.loader ? `Login...` : `Login`}
                    </Button>
                </div>
            </Form>
        );
    }
}

export default connect(null, mapDispatchToProps)(Login);
