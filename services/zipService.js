import { filesToZip } from "./fileService.js";
const JSZip = require('jszip');

export async function zipFiles() {
    const zip = new JSZip();
    filesToZip.forEach(file => {
        zip.file(file.name, file);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(zipBlob);
    downloadLink.download = "files.zip";
    downloadLink.click();
}