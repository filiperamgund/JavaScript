

function contar() {
    var ini = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var pas = Number(document.getElementById('pas').value)

    var res = document.getElementById('res')
    

    if ( ini.length == 0 || fim.lentgh == 0 || pas.lentgh == 0) {
        window.alert ('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:  <br>'
    
    if (pas <= 0) {
        window.alert('Passo Inválido! Considerando Passo 1')
        pas = 1
    }

        
    if (ini < fim) {
            // Contagem crescente
        for (var c = ini ; c <= fim ; c+= pas ) {
                 res.innerHTML += `${c} &#128073`
        } 
    } else {
        // Contagem regressiva
        for (var c = ini; c >= fim ; c-= pas) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`  
    }
}