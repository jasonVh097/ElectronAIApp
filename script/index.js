import { cleanData, trainModel, baseUrl } from '../services/AIService.js';
import { filesToZip, addFile, clearFiles } from '../services/fileService.js';
import { zipFiles } from '../services/zipService.js';

//#region docunent elements
const addFileButton = document.querySelector('#addFile');
const fileInput = document.querySelector('#pdfFile');
const fileList = document.querySelector('ul#pdfFiles');
const clearFilesButton = document.querySelector('#removePdfFilesButton');

const zipButton = document.querySelector('#convertToZip');

const cleanDataButton = document.querySelector('button#cleanDataButton');
const files = document.querySelector('input#zipFile');

const trainModelButton = document.querySelector('button#trainModelButton');
const csvFile = document.querySelector('input#cleanedData');

const visualizeButtons = document.querySelectorAll('div#showResults button');
//#endregion

//#region event listeners
zipButton.addEventListener('click', async () => {
    zipFiles();
})

addFileButton.addEventListener('click', () => {
    addFile(fileInput, filesToZip, fileList);
})
clearFilesButton.addEventListener('click', () => {
    clearFiles(filesToZip, fileList);
})

cleanDataButton.addEventListener('click', async () => {
    handleFunctionWithLoader(() => cleanData(files), '#cleanDataButton');
});

trainModelButton.addEventListener('click', async () => {
    handleFunctionWithLoader(() => trainModel(csvFile), '#trainModelButton');
});

visualizeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        window.open(`${baseUrl}/${button.dataset.target}`, '_blank');
    });
});

async function handleFunctionWithLoader(func, button) {
    const loader = document.querySelector(`${button} + .loader-container`);
    loader.classList.remove('hidden');
    try {
        await func();
    } finally {
        loader.classList.add('hidden');
    }
}
//#endregion