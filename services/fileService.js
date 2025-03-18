const filesToZip = [];

const addFileButton = document.querySelector('#addFile');
const fileInput = document.querySelector('#pdfFile');
const fileList = document.querySelector('ul#pdfFiles');
const clearFilesButton = document.querySelector('#removePdfFilesButton');

addFileButton.addEventListener('click', () => {
    addFile();
})
clearFilesButton.addEventListener('click', () => {
    clearFiles();
})

function addFile(){
    const file = fileInput.files[0];
    if (file) {
        filesToZip.push(file);
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);
    }
}

function clearFiles(){
    filesToZip.length = 0;
    fileList.innerHTML = '';
}

