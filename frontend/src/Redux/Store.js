/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware } from 'redux';
import { reduxBatch } from '@manaflair/redux-batch';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const Store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
	devTools: process.env.NODE_ENV !== 'production',
	enhancers: [reduxBatch],
});

export default Store;
