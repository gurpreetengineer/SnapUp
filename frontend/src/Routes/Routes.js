import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../Agile/Pages/Login/Login';
import Signup from '../Agile/Pages/Signup/Signup';

import MainPage from '../Agile/Pages/MainPage/MainPage';
import ProductDetails from '../Agile/Pages/ProductDetails/ProductDetails';


const Routes = () => {
	return (
		<Fragment>
			<Switch>

				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />

				<Route exact path='/' component={MainPage} />
				<Route path='/product/:productId' component={ProductDetails} />
			</Switch>
		</Fragment>
	);
};

export default Routes;
