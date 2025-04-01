import { postRequest, postRequestBlob } from "./apiService.js";

export const baseUrl = 'http://127.0.0.1:8000'

export async function cleanData(file) {
    try {
        const data = getFileFromInput('files', file);
        await cleanDataRequest(data);
    } catch (error) {
        alert(`Error: ${error.message}\nCheck if the API server is running and that you gave the correct file type.`);
    }
}

export async function trainModel(file) {
    try {
        const data = getFileFromInput('file', file);
        await trainModelRequest(data);
        alert('Model trained successfully!');
    } catch (error) {
        alert(`Error: ${error.message}\nCheck if the API server is running and that you gave the correct file type.`);
    }
}

function getFileFromInput(dataName, input) {
    const data = new FormData();
    data.append(dataName, input.files[0]);
    return data;
}

async function cleanDataRequest(data) {
    const url = `${baseUrl}/extract_clean`;
    const response = await postRequestBlob(url, data);
    return response;
}

async function trainModelRequest(data) {
    const url = `${baseUrl}/train_model`;
    const response = await postRequest(url, data);
    return response;
}