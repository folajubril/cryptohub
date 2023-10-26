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
                                        <h4 className="card-title">Sign in</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="email" className="form-control" placeholder="hello@example.com" name="email" />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Password" name="password" />
                                            </div>
                                            <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                                <div className="form-group mb-0">
                                                    <label className="toggle">
                                                        <input className="toggle-checkbox" type="checkbox" />
                                                        <div className="toggle-switch"></div>
                                                        <span className="toggle-label">Remember me</span>
                                                    </label>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <Link href="/reset">Forgot Password?</Link>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <Link className="btn btn-success w-100" href="/otp1">Sign in</Link>
                                            </div>
                                        </form>
                                        <div className="new-account mt-3">
                                            <p>Don't have an account? <Link className="text-primary d-inline-block" href="/signup">Sign
                                                up</Link></p>
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