import React from "react";

// ViewModal component displays contact details in a modal dialog
const ViewModal = ({ show, data, handleClose }) => {
    return (
        <React.Fragment>
            {/* Modal dialog */}
            <div className={`modal fade ${show ? "show" : ""}`} tabIndex="0" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Contact Info</h5>
                            <button type="button" className="close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Display contact information */}
                            {data ? (
                                <div className='row'>
                                    <div className='col-sm-6 mb-2'>
                                        <label>First Name</label>
                                        <h5>{data.first_name}</h5>
                                    </div>
                                    <div className='col-sm-6 mb-2'>
                                        <label>Last Name</label>
                                        <h5>{data.last_name}</h5>
                                    </div>
                                    <div className='col-sm-6 mb-2'>
                                        <label>Email</label>
                                        <h5>{data.email || ""}</h5>
                                    </div>
                                    <div className='col-sm-6 mb-2'>
                                        <label>Phone Number</label>
                                        <h5>{data.phone_number}</h5>
                                    </div>
                                    <div className='col-sm-6 mb-2'>
                                        <label>Country</label>
                                        <h5>{data.country ? data.country.iso : ""}</h5>
                                    </div>
                                </div>
                            ) : (
                                // Displayed when no contact is selected
                                <p>No contact selected.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal backdrop */}
            <div className={`modal-backdrop ${show ? "show" : ""}`} onClick={handleClose}></div>
        </React.Fragment>
    );
}

export default ViewModal;
