const fs = require('fs');
const pdf = require('pdf-parse')

/*
 * Lee un archivo PDF y extrae el texto
*/
const readPDF = async (filePath) => {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
};

readPDF('./pdf/swebok-v4.pdf').then(text => {
    fs.writeFileSync('swebok-text.txt', text);
    console.log('Texto extraído y guardado en swebok-text.txt');
}).catch(err => {
    console.error('Error al leer el PDF:', err);
});
