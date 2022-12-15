interface Palette {
	name: string;
	theme?: string;
	colours: string[];
}
interface User {
	username: string;
	password: string;
}

interface Options {
	method?: string;
	credentials?: RequestCredentials;
	mode?: RequestMode;
	body?: BodyInit;
	headers?: HeadersInit;
}

const databasePath = "databasepath";

export default function request(path: string, options: Options) {
	options = options ?? {};
	options.method = options.method ?? "POST";
	options.credentials = "include";
	options.mode = "cors";
	options.body = options.body ? JSON.stringify(options.body) : undefined;
	options.headers = options.headers ?? {};

	return fetch(databasePath + path, options);
}
