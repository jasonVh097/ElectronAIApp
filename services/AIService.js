import {postRequest, postRequestBlob } from "./apiService.js";

const baseUrl = 'http://127.0.0.1:8000'

const cleanDataButton = document.querySelector('button#cleanDataButton');
const files = document.querySelector('input#zipFile');

const trainModelButton = document.querySelector('button#trainModelButton');
const csvFile = document.querySelector('input#cleanedData');

cleanDataButton.addEventListener('click', async () => {
    const data = new FormData();
    data.append('files', files.files[0]);

    await extractCleanData(data);
});

trainModelButton.addEventListener('click', async () => {
    const data = new FormData();
    data.append('file', csvFile.files[0]);

    await trainModel(data);
});

async function extractCleanData(data) {
    const url = `${baseUrl}/extract_clean`;
    const response = await postRequestBlob(url, data);
    return response;
}

async function trainModel(data) {
    const url = `${baseUrl}/train_model`;
    const response = await postRequest(url, data);
    return response;
}