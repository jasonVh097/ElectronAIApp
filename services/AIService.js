import { postRequest, postRequestBlob } from "./apiService.js";

export const baseUrl = 'http://127.0.0.1:8000'

export async function cleanData(file) {
    const data = getFileFromInput('files', file);
    await cleanDataRequest(data);

}

export async function trainModel(file) {
    const data = getFileFromInput('file', file);
    await trainModelRequest(data);
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