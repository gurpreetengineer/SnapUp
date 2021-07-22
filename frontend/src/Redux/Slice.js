import { createSlice } from '@reduxjs/toolkit';
// import { FETCH_USER_DETAILS, FETCH_PRODUCT_DETAILS, POST_NEW_USER_DETAILS } from './actionTypes';

export const initialState = {
	productDetails: null,
	listOfProducts: null,
	loginUserInfo: {}
};

const productSlice = createSlice({
	name: 'productDataHandlerSlice',
	initialState: initialState,
	reducers: {
		fetchAllProducts(state, action) {
			return {
				...state,
				listOfProducts: action.payload,
			};
		},
		fetchSingleProductDetails(state, action) {
			return {
				...state,
				productDetails: action.payload,
			};
		}
	}
});

const userSlice = createSlice({
	name: 'userDataHandlerSlice',
	initialState: initialState,
	reducers: {
		addUserDetails(state, action) {
			return {
				...state,
				loginUserInfo: action.payload
			};
		}
	}
});
export const { addUserDetails } = userSlice.actions;
export const { userSliceReducer } = userSlice.reducer;

export const { fetchAllProducts, fetchSingleProductDetails } = productSlice.actions;
export default productSlice.reducer;
