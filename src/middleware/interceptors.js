import axios from "axios";
import { PROXY } from "../services/urls";

console.log("Stating ");
axios.interceptors.request.use((req) => {
	const { headers, data, method, url } = req;

	req.url = PROXY;

	req.data = {
		url,
		body: data,
		headers,
	};

	req.headers = {
		...req.headers,
		"Content-Type": "application/json",
		Accept: "application/json",
	};

	console.log(`Sending ${method} request to ${url} via proxy server ${PROXY}`);

	return req;
});
