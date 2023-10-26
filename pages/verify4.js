import Link from 'next/link';
import React from 'react';
import LayoutFront from '../Components/Layout/LayoutFront';

const Verify4 = () => {
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
                                        <form action="add-debit-card.html" className="identity-upload">
                                            <div className="identity-content">
                                                <span className="icon"><i className="fa fa-check"></i></span>
                                                <h4>Identity Verified</h4>
                                                <p>Congrats! your identity has been successfully verified and your investment limit has been increased.</p>
                                            </div>

                                            <div className="text-center mb-4">
                                                <Link href="./addCard" className="btn btn-success ps-5 pe-5">Continue</Link>
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

export default Verify4;