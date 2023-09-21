import React, { useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { contactsList, viewContact } from "../duck/contacts/contacts.action";
import { closeModal } from "../duck/modal/modal.action";
import history from "../routing/history";
import { HOME } from "../routing/constants";
import { Scrollbars } from 'react-custom-scrollbars';
import ViewModal from "../components/Modal/viewModal";

const USContacts = () => {
    const dispatch = useDispatch();
    const { show } = useSelector((state) => state.modal);
    const { contactsListData, loading, viewContactData } = useSelector((state) => state.contacts);

    // State variable to track whether the checkbox is checked
    const [showEvenIds, setShowEvenIds] = useState(false);
    const [isTyping, setIsTyping] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewModal, setViewModal] = useState(false);
    const [search, setSearch] = useState("");

    // Redirect to HOME route if the modal is closed
    useEffect(() => {
        if (!show) {
            history.push(HOME);
        }
    }, [show, history]);

    // Fetch US contacts data only if it hasn't been fetched already
    useEffect(() => {
        if (!contactsListData.contacts) {
            dispatch(contactsList({
                companyId: '171',
                page: 1,
                countryId: 226 // US Id
            }));
        }
    }, [contactsListData.contacts, dispatch]);

    // Close the modal and navigate to HOME route
    const handleClose = () => {
        dispatch(closeModal());
        history.push(HOME);
    };

    // Function to handle checkbox change
    const handleOnlyEvenCheckbox = () => {
        // Toggle the value of showEvenIds when the checkbox is clicked
        setShowEvenIds(!showEvenIds);
    };

    const handleSearch = (event) => {
        if (isTyping) {
            clearTimeout(isTyping);
        }
        setSearch(event.target.value);
        const query = event.target.value;
        setIsTyping(() =>
            setTimeout(() => {
                dispatch(contactsList({
                    companyId: '171',
                    page: 1,
                    query,
                    countryId: 226 // US Id
                }));
            }, 1000)
        );
    }

    const handleScroll = (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        const scrollThreshold = 50; // Adjust this value as needed
        // Check if the current state length is less than the API total
        if (
            contactsListData.contacts_ids.length < contactsListData.total &&
            scrollTop + clientHeight >= scrollHeight - scrollThreshold
        ) {
            // Dispatch an action to fetch more data and append it to your existing data
            dispatch(
                contactsList({
                    companyId: '171',
                    page: currentPage + 1,
                    query: search || '',
                    countryId: 226 // US Id
                })
            );
            // Update the currentPage state when new data is loaded.
            setCurrentPage(currentPage + 1);
        }
    };
    

    const handleViewModal = (id) => {
        if(id) {
            setViewModal(!viewModal);
            dispatch(viewContact(id));
        }
    }

    const handleCloseViewModal = () => {
        setViewModal(!viewModal);
    }

    // Function to get the country name from the data based on country_id
    const getCountryName = (countryId) => {
        if (contactsListData.contacts[countryId]) {
            return contactsListData.contacts[countryId].country.iso;
        }
        return ""; // Return an empty string if the country ID is not found
    };

    // Filter the contacts based on the checkbox state
    const filteredContacts = showEvenIds
        ? contactsListData.contacts_ids.filter((id) => id % 2 === 0)
        : contactsListData.contacts_ids;


    return (
        <React.Fragment>
            {/* Wrap the Modal component in Scrollbars */}
            
                {/* Pass data and functions to the Modal component */}
                <Modal
                    loading={loading}
                    show={show}
                    data={filteredContacts}
                    contactsListData={contactsListData}
                    getCountryName={getCountryName}
                    showEvenIds={showEvenIds}
                    handleSearch={handleSearch}
                    handleClose={handleClose}
                    handleViewModal={handleViewModal}
                    handleOnChange={handleOnlyEvenCheckbox}
                    handleScroll={handleScroll}
                />
            {viewModal ? <ViewModal show={viewModal} data={viewContactData || {}} handleClose={handleCloseViewModal}/> : ""}
        </React.Fragment>
    )
}

export default USContacts;
