import React, { useState } from "react";

import {
    Button,
    FormGroup,
    Form,
    Input,
} from "reactstrap";
import { AuthenticationService } from "../services";
import { useDispatch, useSelector } from "react-redux";
import {
    errorToaster,
    successToaster,
} from "./common";


import "../App.css";

function Login(props) {

    const dispatch = useDispatch();

    const [loader, setLoader] = useState(false);
    const [data, setData] = useState({
        Email: "",
        Password: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    const signUp = () => {
        const { history } = props;
        history.push("/signup");
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

    const onLogin = () => {
        errorToaster("Please Enter Email.");
        if (data.Email === "") {
            errorToaster("Please Enter Email.");
        } else if (data.Password === "") {
            errorToaster("Please Enter Password.");
        } else {
            let req = { "username": data.Email, "password": data.Password }
            dispatch(AuthenticationService.Login(req))
        }
        // this.setState({
        //     loader: true,
        // });
        // let loginUserData = {
        //     username: this.state.Email,
        //     password: this.state.Password,
        // };
        // fetch("http://staging.webmynehost.com/consumercoverage/api/login", {
        //     method: "POST",
        //     headers: {
        //         Authkey: "Lopiuy4vQ74#1jGNr",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(loginUserData),
        // }).then((response) => response.text())
        //     .then((responseText) => {
        //         responseText = JSON.parse(responseText);
        //         if (responseText.error) {
        //             this.setState({
        //                 loader: false,
        //             });
        //             errorToaster("Invalid login credentials.");
        //         } else {
        //             this.setState({
        //                 loader: false,
        //             });
        //             successToaster("Login Successfully");
        //             let userData = responseText.responsedata;
        //             this.props.LOGIN_USER_DETAIL(userData.userdata);
        //             this.props.TOKEN_KEY(userData.session);
        //             const { history } = this.props;
        //             history.push("/dashboard");
        //         }
        //     })
        //     .catch((err) => { });
    };

    return (
        <Form className="login-form">
            <h2 className="text-center">Welcome</h2>
            <FormGroup className="mb-3">
                <Input
                    name="Email"
                    value={data.Email}
                    placeholder={"Email"}
                    type="email"
                    autoComplete="new-email"
                    onChange={(e) =>
                        handleChange(e)
                    }
                />
            </FormGroup>
            <FormGroup>
                <Input
                    name="Password"
                    placeholder={"Password"}
                    type="password"
                    autoComplete="new-password"
                    value={data.Password}
                    onChange={(e) =>
                        handleChange(e)
                    }
                />
            </FormGroup>
            <div className="text-center">
                <Button
                    className="btn-lg btn-green btn-block mt-3 mb-3 "
                    type="button"
                    // disabled={!data.Email || !data.Password ? true : false}
                    onClick={() => onLogin()}
                >
                    {loader && <i class="fas fa-spinner fa-pulse"></i>}
                    {loader ? `Login...` : `Login`}
                </Button>
            </div>
            <div className="text-center">
                <Button
                    className="btn-lg btn-dark btn-block mt-3 "
                    type="button"
                    onClick={() => signUp()}>
                    SignUp Form
                </Button>
            </div>
        </Form>
    );

}

export default Login;
