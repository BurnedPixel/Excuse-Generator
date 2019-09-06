window.onload = function excusa() {

// Var declaration
    var  who  = ['John Cena', 'Keanu Reaves', 'XXXTENTACION', 'Joji', 'Scarlxrd'];
    var  verb = ['ate', 'drew', '360 no-scoped', 'screamed at', 'played with'];
    var  what = ['a banana', 'anime thighs', 'a dumb duck', 'a bottle of beer', 'some burger'];
    var  when = ['while I was drunk', 'before jumping to a pool', 'right next to Beyonce', 'trying to kill kimself'];

    var  whoW  = who[Math.floor(Math.random() * (who.length))];
    var  verbW = verb[Math.floor(Math.random() * (verb.length))];
    var  whatW = what[Math.floor(Math.random() * (what.length))];
    var  whenW = when[Math.floor(Math.random() * (when.length))];

    var generatedEx = (whoW + ' ' + verbW + ' ' + whatW + ' ' + whenW + '.');

    var salida = document.getElementById("excuse").innerHTML = generatedEx;
}

document.querySelector('#button').addEventListener('click', cambio)
function cambio(){

// Var declaration
var  who  = ['John Cena', 'Keanu Reaves', 'XXXTENTACION', 'Joji', 'Scarlxrd'];
var  verb = ['ate', 'drew', '360 no-scoped', 'screamed at', 'played with'];
var  what = ['a banana', 'anime thighs', 'a dumb duck', 'a bottle of beer', 'some burger'];
var  when = ['while I was drunk', 'before jumping to a pool', 'right next to Beyonce', 'trying to kill kimself'];

var  whoW  = who[Math.floor(Math.random() * (who.length))];
var  verbW = verb[Math.floor(Math.random() * (verb.length))];
var  whatW = what[Math.floor(Math.random() * (what.length))];
var  whenW = when[Math.floor(Math.random() * (when.length))];

var generatedEx = (whoW + ' ' + verbW + ' ' + whatW + ' ' + whenW + '.');

var salida = document.getElementById("excuse").innerHTML = generatedEx;
console.log(salida)
}