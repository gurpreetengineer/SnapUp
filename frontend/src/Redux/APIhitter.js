import axios from './axios';

const PostNewUserData = async (userDetails) => {
	try {
		return await axios.post('/Users', userDetails)
			.then(response => {
				let result = null;
				result = response;
				console.log('response fro api', response);
				return result;
			})
			.catch(error => console.log('Following error occurred:', error));

	} catch (exception) {
		console.log(exception);
	}
};

const FetchLoginUserDetails = () => {

};

const FetchAllProducts = () => {

};

export { PostNewUserData, FetchLoginUserDetails };
export default FetchAllProducts;
