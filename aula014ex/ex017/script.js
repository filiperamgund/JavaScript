function calc() {
    var num = document.getElementById('inum')
    var tab = document.getElementById('ires')
    if (num.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        var n = Number(num.value)
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}