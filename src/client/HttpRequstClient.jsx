import axios from 'axios';

const sendRequest = async (url, method, requestBody) => {
	await axios({method,url, data: JSON.parse(requestBody)})
		.then(response => response)
		.catch(error => error);
};

export default sendRequest;