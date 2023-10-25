function calc() {
    var num = Number(document.getElementById('inum').value)
    var res = document.getElementById('res')

    res.innerHTML = ''

    if ( num == 0) {
        window.alert('Por favor informe algum número')
    } else {
        var n = (num)
        var c = 1
        while (c <=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }


    }
}