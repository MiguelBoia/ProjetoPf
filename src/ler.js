

const verificaResposta = () => {
    const selecaorespo = document.querySelector(".respostas");
    const opcaoselecionada = selecaorespo.options[selecaorespo.selectedIndex].value;//traz as pergunta e ver qual opçao foi selecionada
    const respostaSelecionada = document.getElementById("respostaSelecionada");//leva a resposta para a saida que vai ser exibida na pagina
    console.log("selecaorespo: ", selecaorespo)
    console.log("opcaoselecionada: ", opcaoselecionada)
    console.log("respostaSelecionada: ", respostaSelecionada)

    const pegarCSV = () => {
        // Certifica o caminho para o arquivo CSV é correto
        const url = 'src/athlete_events.csv';

        return fetch(url)
            .then(response => response.text())
            .then(resultado => {
                // Papa.parse() analisa o CSV em um array de objetos JavaScript
                const resultados = Papa.parse(resultado, { header: true }).data;

                if (opcaoselecionada === 'opção1') {
                    
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.NOC === 'BRA' &&
                        linha.Medal === 'Gold'
                    )
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
                
                } else if (opcaoselecionada === 'opção2') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.NOC === 'USA' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção3') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.NOC === 'JPN' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção4') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.NOC === 'KOR' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
                
                } else if (opcaoselecionada === 'opção5') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.ID === '14810' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
                
                } else if (opcaoselecionada === 'opção6') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.ID === '14159' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
                
                } else if (opcaoselecionada === 'opção7') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.ID === '14328' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
                
                } else if (opcaoselecionada === 'opção8') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.ID === '94406' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção9') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.Sport === 'Football' &&
                        linha.Sex === 'F' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção10') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.Sport === 'Volleyball' &&
                        linha.Sex === 'F' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção11') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.Sport === 'Rhythmic Gymnastics' &&
                        linha.Sex === 'F' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
                
                } else if (opcaoselecionada === 'opção12') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.Sport === 'Tennis' &&
                        linha.Sex === 'F' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção13') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.Sex === 'F' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção14') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.Sex === 'M' &&
                        linha.Medal === 'Gold'
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção15') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.NOC === 'BRA'
                    )
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção16') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.NOC === 'USA' 
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção17') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.NOC === 'JPN' 
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
               
                } else if (opcaoselecionada === 'opção18') {
                    const filtrado = resultados.filter(linha =>
                        linha.Year === '2016' &&
                        linha.NOC === 'KOR' 
                    );
                    return filtrado.reduce((acumulador, linha) => acumulador + 1, 0);
                }

                else {
                    return null; // Se a opção não for reconhecida
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                return null; // Se houver um erro, retorne null
            });
    };

    pegarCSV().then(resultado => {
        if (resultado !== null) {
            respostaSelecionada.textContent = `Resultado: ${resultado}`;
        } else {
            respostaSelecionada.textContent = 'Opção inválida ou erro ao processar.';
        }
    });
};
