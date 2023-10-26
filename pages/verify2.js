import Link from 'next/link';
import React from 'react';
import LayoutFront from '../Components/Layout/LayoutFront';

const Verify2 = () => {
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
                                                <h4>Upload your ID card</h4>
                                                <span>(Driving License or Government ID card)</span>

                                                <p>Uploading your ID helps as ensure the safety and security of your founds</p>
                                            </div>

                                            <div className="form-group">
                                                <label className="me-sm-2">Upload Front ID </label>
                                                <span className="float-right">Maximum file size is 2mb</span>
                                                <div className="file-upload-wrapper" data-text="front.jpg">
                                                    <input name="file-upload-field" type="file" className="file-upload-field" value="" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="me-sm-2">Upload Back ID </label>
                                                <span className="float-right">Maximum file size is 2mb</span>
                                                <div className="file-upload-wrapper" data-text="back.jpg">
                                                    <input name="file-upload-field" type="file" className="file-upload-field" value="" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <Link href="/verify3" className="btn btn-success ps-5 pe-5">Submit</Link>
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

export default Verify2;