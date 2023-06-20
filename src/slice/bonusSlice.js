import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	points: 1,
};

const incrementByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
	name: "bonus", // this will define the name of our actions
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.points += 1; // immer library on work
		},
	},
	extraReducers: (builder) => {
		builder.addCase(incrementByAmount, (state, action) => {
			if (action.payload >= 100) state.points++;
		});
	},
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
