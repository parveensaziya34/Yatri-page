// redux/actions/bookingActions.js
export const SUBMIT_BOOKING = 'SUBMIT_BOOKING';

export const submitBooking = (bookingData) => {
  return {
    type: SUBMIT_BOOKING,
    payload: bookingData
  };
};