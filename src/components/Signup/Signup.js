import React from "react";
import { Component } from "react";
import Signin from "../Signin/Signin";
import { Redirect, Link } from "react-router-dom";
// import './Signin/signin.css'

class Signup extends Component {
    state = {
        username: "",
        password: "",
        showSubmmiterror: false,
        errorMsg: "",
    };

    render() {

        return (
            <>
                <div className="container bg-white">
                    <div className="row pt-3 ">

                        <div className="col-lg-8 bg-dark rounded-start ">
                            <div className=" my-div1">
                                <h3 className="text-white fw-bold">Welcome to <br /> Our Community </h3>
                                {/* <h3 className="text-white "></h3> */}
                                <p className="my-para ">
                                    It is a long established fact that a reader will be distracted by the readable content of athis one looking at its layout. The point of using Lorem Ipsum is that it has a
                                </p>
                                <div className="d-flex align-items-center">
                                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1660215136/ul-3_abpcm5.jpg" className="rounded-circle" height={35} alt="..." />
                                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1663062920/gk-img_yxklji.jpg" className="rounded-circle img-margin" height={35} alt="..." />

                                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1660199484/avatar_r57b4l.jpg" className="rounded-circle img-margin" height={35} alt="..." />

                                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1660215136/ul-3_abpcm5.jpg" className="rounded-circle img-margin" height={35} alt="..." />
                                    <p className="my-para  ms-3 mb-0">
                                        lorem ipsu dollar more than 10 k
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 shadow rounded-end col-md-roundede-end-none">
                            <form
                                className="  my-form rounded text-align-left"
                                onSubmit={this.onSubmitForm}
                            >
                                <div className="">
                                    <img src="https://res.cloudinary.com/dlxfoztlz/image/upload/v1665493036/doe_mr4yyi.png" className="rounded-circle mb-4  login-img" height={45} alt="..." />
                                    <h4 className="sign fw-bold"> Sign up</h4>
                                    <p className="account">Already have account? <span style={{ color: "blue" }}> <Link to='/signin' style={{ textDecoration: 'none' }}>Sign in</Link></span></p>
                                </div>


                                <div className="mb-3">
                                    <p className="my-label ">Full Name*</p>
                                    <input type="text" class="form-control" aria-label="Full name" />
                                </div>
                                <div className="mb-3">
                                    <p className="my-label ">Email Address*</p>
                                    {/* <label for="exampleInputEmail1" className="form-label my-label">Email address</label> */}
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <p className="my-label ">Password*</p>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <p className="my-label ">Company*</p>
                                    <input type="text" class="form-control" aria-label="Company" />
                                </div>
                                <div className="mb-3 form-check pt-2 ">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <p className="my-label ">I agree to terms and conditions of privacy policy</p>

                                </div>
                                <button type="submit" className="btn btn-color">Create your account</button>

                            </form>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}
export default Signup;