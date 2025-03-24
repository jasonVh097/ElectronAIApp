export async function getRequest(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getHtmlRequest(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.text();
    } catch (error) {
        throw new Error(error.message);
    }
}   

export async function getImageRequest(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.blob();
    } catch (error) {
        throw new Error(error.message);
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

export async function postRequestBlob(url, body, headers = {}) {
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
        
        const blob = await response.blob();
        const contentDisposition = response.headers.get('Content-Disposition');
        let filename = 'download.csv';

        if (contentDisposition) {
            const match = contentDisposition.match(/filename="?([^"]+)"?/);
            if (match) {
                filename = match[1];
            }
        }

        const urlBlob = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = urlBlob;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(urlBlob);

        return {success: true, filename};

    } catch (error) {
        throw new Error(error.message);
    }
}