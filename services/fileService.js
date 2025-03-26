const filesToZip = [];

export function addFile(input, files, fileList) {
    const file = input.files[0];
    if (file) {
        files.push(file);
        const li = document.createElement('li');
        li.textContent = file.name;
        fileList.appendChild(li);
    }
}

export function clearFiles(files, fileList) {
    files.length = 0;
    fileList.innerHTML = '';
}

export { filesToZip };