import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ALL_CONTACTS, US_CONTACTS } from "../../routing/constants";
import Loader from "../Loader";
import { Scrollbars } from "react-custom-scrollbars";

// Modal component displays contact data in a modal dialog
const Modal = ({
    loading,
    show,
    data,
    contactsListData,
    getCountryName,
    handleClose,
    showEvenIds,
    handleViewModal,
    handleSearch,
    handleOnChange,
    handleScroll
}) => {
    // Get the current pathname using the react-router-dom's useLocation hook
    const { pathname } = useLocation();
    return (
        <React.Fragment>
            <div className={`modal fade ${show ? "show" : ""}`} tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            {/* Navigation links and close button */}
                            <div className='d-flex align-items-center justify-content-center mb-3'>
                                <Link to={pathname === ALL_CONTACTS ? "#" : ALL_CONTACTS} className="btn btn-primary-a">All Contacts</Link>
                                <Link to={pathname === US_CONTACTS ? "#" : US_CONTACTS} className="btn btn-primary-b mx-2">US Contacts</Link>
                                <button type="button" className="btn btn-outline-primary-a" onClick={handleClose}>Close</button>
                            </div>
                            {/* Search input */}
                            <div className='search-input mb-3 d-flex'>
                                <input className='form-control' placeholder='Type here to search...' type='search' onChange={handleSearch} />
                            </div>
                            {/* Contact data table */}
                            <div className='table-responsive wk-table'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="mw-150">Sno.</th>
                                            <th className="mw-150">Id</th>
                                            <th className="mw-150">First Name</th>
                                            <th className="mw-150">Last Name</th>
                                            <th className="mw-200">Email</th>
                                            <th className="mw-150">Phone Number</th>
                                            <th className="mw-150">Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!loading ? (
                                            data && data.length > 0 ? (<tr>
                                                <td colSpan={12} className="p-0">
                                                    <Scrollbars style={{ height: 500 }} onScroll={(e) => handleScroll(e)}>
                                                        {
                                                            data.map((contactId, index) => {
                                                                return (
                                                                    <table className="w-100 cursor-pointer" key={index} onClick={() => handleViewModal(contactId)}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td className="mw-150">{index + 1}</td>
                                                                                <td className="mw-150">#{contactId}</td>
                                                                                <td className="mw-150">{contactsListData.contacts[contactId].first_name}</td>
                                                                                <td className="mw-150">{contactsListData.contacts[contactId].last_name}</td>
                                                                                <td className="mw-200">{contactsListData.contacts[contactId].email}</td>
                                                                                <td className="mw-150">{contactsListData.contacts[contactId].phone}</td>
                                                                                <td className="mw-150">{getCountryName(contactsListData.contacts[contactId].country_id)}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                )
                                                            })
                                                        }
                                                    </Scrollbars>
                                                </td>
                                            </tr>) : (
                                                // Displayed when no data is found
                                                <tr>
                                                    <td className="text-center" colSpan={8}>No Data Found!</td>
                                                </tr>
                                            )
                                        ) : (
                                            // Displayed when data is loading
                                            <tr>
                                                <td className="text-center" colSpan={8}>
                                                    <Loader />
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Checkbox to show only even contact IDs */}
                        <div className="modal-footer justify-content-start">
                            <label><input type="checkbox" checked={showEvenIds} onChange={handleOnChange} /> Only Even</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal backdrop */}
            <div className={`modal-backdrop ${show ? "show" : ""}`} onClick={handleClose}></div>
        </React.Fragment>
    );
}

export default Modal;
