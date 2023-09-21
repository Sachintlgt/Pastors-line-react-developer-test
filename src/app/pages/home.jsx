import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../duck/modal/modal.action';
import { Link } from 'react-router-dom';
import { ALL_CONTACTS, US_CONTACTS } from '../routing/constants';

// Home component represents the landing page of the application
const Home = () => {
    // Initialize the Redux dispatch function
    const dispatch = useDispatch();

    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            {/* Button A: Redirects to the ALL_CONTACTS route and triggers the modal to be shown */}
            <Link to={ALL_CONTACTS} className='btn btn-primary-a btn-lg' onClick={() => dispatch(showModal())}>Button A</Link>

            {/* Button B: Redirects to the US_CONTACTS route and also triggers the modal to be shown */}
            <Link to={US_CONTACTS} className='btn btn-primary-b ml-3 btn-lg' onClick={() => dispatch(showModal())}>Button B</Link>
        </div>
    );
}

export default Home;
