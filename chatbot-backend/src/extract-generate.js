// Importar módulos necesarios
const fs = require('fs'); // Para trabajar con el sistema de archivos
const path = require('path'); // Para manejar rutas de archivos
const pdfParse = require('pdf-parse'); // Para analizar archivos PDF (instalar con: npm install pdf-parse)
const axios = require('axios'); // Para realizar solicitudes HTTP (instalar con: npm install axios)

// Función para extraer texto de un PDF.
async function extractTextFromPDF(pdfPath) {
    // Leer el archivo PDF como un buffer
    const pdfBuffer = fs.readFileSync(pdfPath); 
    
    // Extraer texto del PDF usando pdf-parse
    const data = await pdfParse(pdfBuffer); 
    
    // Crear un objeto para almacenar el texto extraído
    const pdfText = {};

    // Dividir el texto en páginas y luego en párrafos
    const pages = data.text.split(/\f/); // Dividir por el delimitador de página (form feed)
    pages.forEach((pageText, pageNum) => {
        const paragraphs = pageText.trim().split('\n'); // Dividir en párrafos por saltos de línea
        pdfText[pageNum] = paragraphs; // Asignar párrafos a la página correspondiente en el objeto
    });

    return pdfText; // Devolver el objeto con el texto extraído
}

// Función para guardar el texto extraído en un archivo JSON.
function savePDFText(pdfText, outputPath) {
    // Escribir el texto en un archivo JSON con formato legible
    fs.writeFileSync(outputPath, JSON.stringify(pdfText, null, 4), 'utf8'); 
}

// Función para generar embeddings utilizando la API de Hugging Face
async function generateEmbeddings(textData) {
    const embeddings = {};
    const apiUrl = 'https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2';
    const headers = {
        'Authorization': `Bearer `, // Reemplaza con tu token de API
    };

    for (const [pageNum, paragraphs] of Object.entries(textData)) {
        const pageEmbeddings = [];
        for (const paragraph of paragraphs) {
            try {
                const response = await axios.post(apiUrl, { inputs: paragraph }, { headers });
                const embedding = response.data[0]; // Asumiendo que la API devuelve un array
                pageEmbeddings.push(embedding);
            } catch (error) {
                console.error(`Error generando embedding para el párrafo: ${paragraph}`, error);
            }
        }
        embeddings[pageNum] = pageEmbeddings;
    }

    return embeddings;
}

function saveEmbeddings(embeddings, outputPath) {
    fs.writeFileSync(outputPath, JSON.stringify(embeddings, null, 4));
}

// Ejecución principal del script (IIFE - Immediately Invoked Function Expression)
(async () => {
    try {
        // Obtener el directorio del script actual
        const baseDir = path.dirname(__filename); 
        
        // Definir rutas al archivo PDF y al archivo JSON de salida
        const pdfPath = path.join(baseDir, '../data-text/swebok-v4.pdf');  
        const outputPath = path.join(baseDir, '../data-text/pdf_text.json'); 

        // Extraer el texto del PDF
        const pdfText = await extractTextFromPDF(pdfPath); 
        
        // Guardar el texto extraído en un archivo JSON
        savePDFText(pdfText, outputPath);
        
        console.log(`Texto extraído y guardado en ${outputPath}`); 

        // Generar los embeddings localmente
        const embeddings = await generateEmbeddings(pdfText);

        // Guardar los embeddings generados
        saveEmbeddings(embeddings, '../data-text/embeddings.json');
        console.log("Embeddings generados y guardados en 'data-text/embeddings.json'");
        
    } catch (error) {
        // Mostrar un mensaje de error en la consola si ocurre algún problema
        console.error('Error al procesar el archivo PDF:', error); 
    }
})();
