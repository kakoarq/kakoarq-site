const fs = require('fs');
const path = require('path');

const diretorio = 'C:\\Users\\leopa\\OneDrive\\Área de Trabalho\\Copolla\\assets\\imagens\\projeto\\projeto_juquehy\\Acqua';

// Lista todos os arquivos no diretório
fs.readdir(diretorio, (err, arquivos) => {
    if (err) throw err;

    // Filtra apenas os arquivos que começam com "aqua"
    const arquivosFotos = arquivos.filter(arquivo => arquivo.startsWith('aqua'));

    // Ordena os arquivos
    const arquivosOrdenados = arquivosFotos.sort((a, b) => {
        const numA = parseInt(a.replace('aqua', '').replace(/\D/g, ''), 10) || 0;
        const numB = parseInt(b.replace('aqua', '').replace(/\D/g, ''), 10) || 0;
        return numA - numB;
    });

    // Renomeia os arquivos
    arquivosOrdenados.forEach((arquivo, index) => {
        const novoNome = `aqua${index + 1}.jpg`;

        fs.rename(path.join(diretorio, arquivo), path.join(diretorio, novoNome), err => {
            if (err) throw err;
            console.log(`Renomeado: ${arquivo} -> ${novoNome}`);
        });
    });
});
