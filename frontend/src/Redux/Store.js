/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware } from 'redux';
import { reduxBatch } from '@manaflair/redux-batch';
import thunk from 'redux-thunk';

import rootReducer from './Slice';

const Store = configureStore({
	rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
	devTools: process.env.NODE_ENV !== 'production',
	enhancers: [reduxBatch],
});

export default Store;
