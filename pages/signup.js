import Link from 'next/link';
import React from 'react';
import LayoutFront from '../Components/Layout/LayoutFront';

const Signin = () => {
    return (
        <>
            <LayoutFront>
                <div className="authincation section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="auth-form card">
                                    <div className="card-header justify-content-center">
                                        <h4 className="card-title">Sign up your account</h4>
                                    </div>
                                    <div className="card-body">
                                        <form method="post" name="myform" className="signup_validate">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control" placeholder="username" name="username" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="hello@example.com" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Password" name="password" />
                                            </div>
                                            <div className="text-center mt-4">
                                                <Link href="signin" className="btn btn-success w-100">Sign up</Link>
                                            </div>
                                        </form>
                                        <div className="new-account mt-3">
                                            <p>Already have an account? <Link className="text-primary d-inline-block" href="signin">Sign in</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
};

export default Signin;