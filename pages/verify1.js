import Link from 'next/link';
import React from 'react';
import LayoutFront from '../Components/Layout/LayoutFront';

const Verify1 = () => {
    return (
        <>
            <LayoutFront>
            <div className="verification section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="auth-form card">
                                    <div className="card-header">
                                        <h4 className="card-title">Link a Debit card</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="identity-content">
                                                <span className="icon"><i className="fa fa-shield"></i></span>
                                                <h4>Please verify your identity before adding your card</h4>
                                                <p>Uploading your ID helps as ensure the safety and security of your founds</p>
                                            </div>

                                            <div className="text-center">
                                                <Link href="./verify2" className="btn btn-success ps-5 pe-5">Upload ID</Link>
                                            </div>
                                        </form>
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

export default Verify1;