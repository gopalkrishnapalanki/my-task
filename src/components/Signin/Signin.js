import React from "react";
import { Component } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import './Signin.css'



class Signin extends Component {
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
                                    <h4 className="sign fw-bold"> Sign in</h4>
                                    <p className="account">Dont have account? <span style={{ color: "blue" }}> <Link to='/signup' style={{ textDecoration: 'none' }}>Sign Up</Link></span></p>
                                </div>



                                <div className="mb-3">
                                    <p className="my-label ">Email Address*</p>
                                    {/* <label for="exampleInputEmail1" className="form-label my-label">Email address</label> */}
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <p className="my-label ">Password*</p>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                    <span  class="fa fa-fw fa-eye field-icon toggle-password"><svg toggle="#password-field" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                    </svg></span>
                                </div>
                                <div className="mb-3 form-check pt-2 ">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <p className="my-label ">Remember me</p>
                                    <p className="my-label ">Remember me</p>
                                </div>
                                <button type="submit" className="btn btn-color">Sign in</button>
                                <p className="contineu">--------- Or continue with ---------</p>
                                <div className="d-flex justify-content-between">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>

                                    </div>
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>

                                    </div>
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </div>

                                </div>






                            </form>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}
export default Signin;