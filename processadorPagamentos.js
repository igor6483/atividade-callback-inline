function processarTransacaoPix(chavePix, valor){
    console.log(`
    id: ${Math.floor(Math.random() * 100000)},
    ${chavePix},
    ${valor},
    data:${ new Date().toLocaleTimeString()}
    `)
}

function callbackAcao(chavePix,valor,transacao){
    if (valor <= 0) {
    console.log("erro")
  } else {   
    transacao(chavePix,valor)
  }
}
callbackAcao(100,10,processarTransacaoPix)

function creditarCashback(valor){
    const bonus = valor + (valor*0.02)
    return bonus
}

function emitirComprovantePorEmail(id,valor,destinatario,nome){
    console.log(`
        id:${id},
        valor:${destinatario(valor)},
        para:${nome}`)
}


function auditarTransacaoSuspeita(id,valor,destinatario,nome){
    if (valor > 5000){
        console.log("Transição cancelada-suspeita de fraude")
    }else{
        emitirComprovantePorEmail(id,valor,destinatario,nome)
    }
}

auditarTransacaoSuspeita(10,5100,creditarCashback,"Felipe")

function adicionarpreco(valor){
    const novo = valor + 5
    return novo
}

function processarTransacaoPix(valor){
    console.log(`a transação de ${valor} foi realizada`)
}


function confirmacao(id,valor,destinatario,nome){
    if (valor > 5000){
        console.log("Transição cancelada-suspeita de fraude")
    }else{
    console.log(`
        id:${id},
        valor:${destinatario(valor)},
        para:${nome}`)
    }
}

confirmacao(10,500,adicionarpreco,"Felipe",processarTransacaoPix)


function enviarWebhookAssincrono(transacao){
         setTimeout(() => {console.log(`A transacao de ${transacao} foi finalizada`)},2000 )}


enviarWebhookAssincrono(500)