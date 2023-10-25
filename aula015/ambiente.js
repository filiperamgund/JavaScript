var n = [5, 6, 7, 8, 3, 1]

/*console.log(n.length)*/

/*for (pos = 0 ; pos < n.length ; pos++ ) {
    console.log(`O número ${n[pos]} está na posição ${pos}`)
}*/

/*for (var pos in n ) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)
}
*/
var pos = n.indexOf(8)

if (pos == -1) {
    console.log(`O número não existe`)
} else {
    console.log(`O número ${n[pos]} está na posição ${pos}`)
}   

