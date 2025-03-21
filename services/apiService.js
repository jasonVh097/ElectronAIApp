export async function getRequest(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
        return null;
    }
}

export async function postRequest(url, body, headers = {}) {
    try {
        const options = {
            method: 'POST',
            headers: {
                ...headers,
            },
            body: body instanceof FormData ? body : JSON.stringify(body)
        };

        if (!(body instanceof FormData)) {
            options.headers['Content-Type'] = 'application/json';
        }
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
        return null;
    }
}