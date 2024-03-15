import React from "react";
import fs from 'fs';
import path from 'path';

const DataExport = ({ formData, image, pdfFile }) => {
    const handleSubmit = () => {
        try {
            const dataFilePath = path.join(__dirname, 'data.json');
            fs.writeFileSync(dataFilePath, JSON.stringify(formData));

            if (image) {
                const imageFilePath = path.join(__dirname, 'logomarca.jpg');
                fs.writeFileSync(imageFilePath, image);
            }

            if (pdfFile) {
                const pdfFilePath = path.join(__dirname, 'certificado.pdf');
                fs.writeFileSync(pdfFilePath, pdfFile);
            }

            const folderPath = path.join(__dirname, 'dados_usuario');
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }
            fs.renameSync(dataFilePath, path.join(folderPath, 'dados.json'));
            if (image) {
                fs.renameSync(imageFilePath, path.join(folderPath, 'logomarca.jpg'));
            }
            if (pdfFile) {
                fs.renameSync(pdfFilePath, path.join(folderPath, 'certificado.pdf'));
            }

            console.log('Arquivos e dados gerados com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar dados para o backend:', error);
        }
    };

    return (
        <button onClick={handleSubmit}>Exportar Dados</button>
    );
};

export default DataExport;
