// Import action types from modal.action file
import { CLOSE_MODAL, SHOW_MODAL } from './modal.action';

// Import the default state from modal.state file
import { DEFAULT_STATE } from './modal.state';

// Reducer function for managing the modal state
// Takes 'state' and 'action' as parameters, with 'action' having a default value
export const modalReducer = (state = DEFAULT_STATE, action = {
    type: {},
    data: {}
}) => {
    // Switch statement to handle different action types
    switch (action.type) {
        // Case for showing the modal
        case SHOW_MODAL:
            // Update the 'show' property in the state to 'true'
            return { ...state, show: true };

        // Case for closing the modal
        case CLOSE_MODAL:
            // Update the 'show' property in the state to 'false'
            return { ...state, show: false };

        // Default case, returns the current state for unhandled actions
        default:
            return state;
    }
};
