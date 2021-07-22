import { combineReducers } from 'redux';
import productSliceReducer, { userSliceReducer } from './Slice';

const rootReducer = combineReducers({
	user: userSliceReducer,
	product: productSliceReducer,
});

export default rootReducer;
