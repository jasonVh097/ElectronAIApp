async function apiRequest({ url, method = 'GET', body = null, headers = {} }) {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
        };
        
        if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
            options.body = JSON.stringify(body);
        }
        
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Request Error:', error);
        return null;
    }
}