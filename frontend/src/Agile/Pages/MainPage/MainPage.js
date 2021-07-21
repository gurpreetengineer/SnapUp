import React from 'react';

import MainBody from './MainBody';
import Header from '../ReusableComponents/Header/Header';
import Footer from '../ReusableComponents/Footer/Footer';

const MainPage = () => {
	return (
		<div>
			<Header />
			<MainBody />
			<Footer />
		</div>
	);
};

export default MainPage;
