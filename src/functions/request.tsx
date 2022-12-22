interface Options {
	method?: string;
	credentials?: RequestCredentials;
	mode?: RequestMode;
	body?: BodyInit;
	headers?: HeadersInit;
}

export const databasePath = "http://127.0.0.1:8000";

export default function request(
	path: string,
	options: Options,
	data?: object | string
) {
	options = options ?? {};
	options.method = options.method ?? "POST";
	//options.credentials = "include";
	options.mode = "cors";
	if (typeof data === "object") {
		options.body = JSON.stringify(data);
		options.headers = { "Content-Type": "application/json" };
	}
	if (typeof data === "string") {
		options.body = data;
		options.headers = {
			"Content-Type": "application/x-www-form-urlencoded",
		};
	}
	if (!data) {
		options.body = undefined;
	}

	return fetch(databasePath + path, options);
}
