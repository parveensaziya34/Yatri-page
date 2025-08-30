// src/redux/reducers/bookingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripType: "oneway",
  activeTab: "flights",
  formData: {
    from: "",
    to: [""],   // 👈 yaha array rakho
    date: "",
    returnDate: "",
    passengers: 1,
    destinations: [] // 👈 Always an array
  }
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addDestination: (state, action) => {
      state.formData.destinations.push(action.payload);
    },
    removeDestination: (state, action) => {
      state.formData.destinations = state.formData.destinations.filter(
        (_, i) => i !== action.payload
      );
    }
  }
});

// ✅ Export actions
export const { setTripType, setActiveTab, setFormData, addDestination, removeDestination } =
  bookingSlice.actions;

// ✅ Export reducer
export default bookingSlice.reducer;
