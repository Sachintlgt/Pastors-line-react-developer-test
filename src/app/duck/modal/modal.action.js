// Action for showing the modal
export const SHOW_MODAL = 'SHOW_MODAL';
export const showModal = (data) => ({ type: SHOW_MODAL, data });
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = (data) => ({ type: CLOSE_MODAL, data });
