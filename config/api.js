export const host = process.env.API_HOST ?? "http://localhost:3001";
export const endpoint = `${host}/api`;

export default {
	host,
	endpoint
};