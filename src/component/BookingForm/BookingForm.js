import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tripType: 'Round Trip',
  activeTab: 'Outstation',
  
  formData: {
    from: '',
    to: [''],
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
  },
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
    addDestination: (state) => {
      state.formData.to = [...state.formData.to, ''];
    },
    removeDestination: (state, action) => {
      const newTo = [...state.formData.to];
      newTo.splice(action.payload, 1);
      state.formData.to = newTo;
    },
  },
});

export const { setTripType, setActiveTab, setFormData, addDestination, removeDestination } = bookingSlice.actions;
export default bookingSlice.reducer;