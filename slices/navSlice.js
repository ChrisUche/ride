import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        }, //when an action comes in change the state of the origin to the action
        setDestination: (state, action) => {
            state.origin = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.origin = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

//selectors: for pulling from the data layer

export const selectOrigin = (state) => state.nav.origin; // if you dont inculde "{}" in an arrow function you get a direct return
export const selectDestination = (state) => state.nav.destination; 
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation; 

export default navSlice.reducer