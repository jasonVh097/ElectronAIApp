import {postRequest, postRequestBlob } from "./apiService.js";

const baseUrl = 'http://127.0.0.1:8000'

const button = document.querySelector('button#cleanDataButton');
const file = document.querySelector('input#zipFile');

button.addEventListener('click', async () => {
    const data = new FormData();
    data.append('files', file.files[0]);

    const cleanData = await extractCleanData(data);
    console.log(cleanData);
});

async function extractCleanData(data) {
    const url = `${baseUrl}/extract_clean`;
    const response = await postRequestBlob(url, data);
    return response;
}