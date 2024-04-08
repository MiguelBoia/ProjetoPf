const esconde = (numeroQuestoes) => {
    const selQuetoes = document.querySelectorAll('.muda');//oculta a pergunta e desoculta quando é preciso
    selQuetoes.forEach(muda => {
        muda.style.display = 'none'
    })
    document.getElementById('Q' + numeroQuestoes).style.display = 'block';
};



const proximaquestao = () => {
    const perguntatual = procura()
    if (perguntatual < totaldeQuestoes()) {//observa em que questão esta para ver se pode passar para a proxima
        esconde(perguntatual + 1)
    }
}

const questaoanterior = () => {
    const perguntatual = procura();//observa em que questão esta para ver se pode passar para questão anterior
    if (perguntatual > 1) {
        esconde(perguntatual - 1)
    }
}

const procura = () => {
    return Array.from(document.querySelectorAll('.muda')).findIndex(muda => muda.style.display !== 'none') + 1;// verifica se tal pergunta esta ocultada ou não
}

const totaldeQuestoes = () => {
    return document.querySelectorAll('.muda').length;//verifica quanta perguntas tem
}

esconde(1);