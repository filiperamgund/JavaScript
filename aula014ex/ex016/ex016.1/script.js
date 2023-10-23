function contar() {
    var ini = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var pas = Number(document.getElementById('pas').value)
    var res = document.getElementById('res')


    if (isNaN(ini)  || isNaN(fim) || isNaN(pas)) {
        window.alert('Por favor digite os valores')
    } else {
        
        res.innerHTML = 'Contando: <br> '
    }

    if (pas <= 0) {
        window.alert('[ERRO] Considerando Passo = 1 ')
        pas = 1
    }

    if (ini < fim) {
        for (var c = ini; c <= fim; c += pas) {
            res.innerHTML += `${c} &#128073`
        }
    } else {
        for (var c = ini; c >= fim; c -= pas) {
            res.innerHTML += `${c} &#128073`
    }
    
}
res.innerHTML += `\u{1F3C1}`
}
