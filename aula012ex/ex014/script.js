function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()

    //var hora = data.getHours()//
    var hora = 17
    

    msg.innerHTML=`Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#ffe2c0'
    } else if (hora >=12 && hora <=18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#9482af'
    } else {
        img.src= 'noite.png'
        document.body.style.backgroundColor = '#1b2033'
    }
} 