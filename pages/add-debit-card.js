import Link from 'next/link';
import React from 'react';
import LayoutFront from '../Components/Layout/LayoutFront';

const AddBankAcc = () => {
    return (
        <>
            <LayoutFront>
            <div className="verification section-padding">
                    <div className="container h-100">
                        <div className="row justify-content-center h-100 align-items-center">
                            <div className="col-xl-4 col-md-6">
                                <div className="auth-form card">
                                    <div className="card-header">
                                        <h4 className="card-title">Link a debit card</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="form-group col-xl-12">
                                                    <label className="me-sm-2">Name on card </label>
                                                    <input type="text" className="form-control" placeholder="Maria Pascle" />
                                                </div>
                                                <div className="form-group col-xl-12">
                                                    <label className="me-sm-2">Card number </label>
                                                    <input type="text" className="form-control" placeholder="5658 4258 6358 4756" />
                                                </div>
                                                <div className="form-group col-xl-4">
                                                    <label className="me-sm-2">Expiration </label>
                                                    <input type="text" className="form-control" placeholder="10/22" />
                                                </div>
                                                <div className="form-group col-xl-4">
                                                    <label className="me-sm-2">CVC </label>
                                                    <input type="text" className="form-control" placeholder="125" />
                                                </div>
                                                <div className="form-group col-xl-4">
                                                    <label className="me-sm-2">Postal code </label>
                                                    <input type="text" className="form-control" placeholder="2368" />
                                                </div>

                                                <div className="text-center col-12">
                                                    <Link href="./verify6"  className="btn btn-success ps-5 pe-5 w-100">Save</Link>
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