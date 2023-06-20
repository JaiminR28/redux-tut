import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	amount: 1,
};

export const getUserAccount = createAsyncThunk(
	"users/getUser",
	async (userId, thunkAPI) => {
		const { data } = await axios.get(
			`http://localhost:8000/accounts/${userId}`
		);

		return data.amount;
	}
);

export const accountSlice = createSlice({
	name: "account", // this will define the name of our actions
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.amount += 1; // immer library on work
		},
		decrement: (state) => {
			state.amount -= 1;
		},
		incrementByAmount: (state, action) => {
			state.amount += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserAccount.fulfilled, (state, action) => {
			state.amount = action.payload;
		});
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
