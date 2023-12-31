import Link from 'next/link';
import React from 'react';
import LayoutFront from '../Components/Layout/LayoutFront';

const AddBankAcc = () => {
    return (
        <>
            <LayoutFront>
            <div className="verification section-padding mb-80">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center  my-5">
                            <div className="col-xl-4 col-md-6">
                                <div className="auth-form card">
                                    <div className="card-header">
                                        <h4 className="card-title">Link a bank account</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-xl-12">
                                                    <label className="me-sm-2">Routing number </label>
                                                    <input type="text" className="form-control" placeholder="25487" />
                                                </div>
                                                <div className="form-group col-xl-12">
                                                    <label className="me-sm-2">Account number </label>
                                                    <input type="text" className="form-control" placeholder="36475" />
                                                </div>
                                                <div className="form-group col-xl-12">
                                                    <label className="me-sm-2">Fulll name </label>
                                                    <input type="text" className="form-control" placeholder="Maria Pascle" />
                                                </div>
                                                <div className="form-group col-xl-12">
                                                    <img src='/images/routing.png' alt="" className="img-fluid" />
                                                </div>

                                                <div className="text-center col-12">
                                                    <Link href="./verify5" className="btn btn-primary mx-2">Back</Link>
                                                    <Link href="./verify6" className="btn btn-success mx-2">Save</Link>
                                                </div>
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

export default AddBankAcc;