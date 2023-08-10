var nomepessoas =[];

function enviarnomes (){
var nomeConvidado = document.getElementById ("nomes").value;
nomepessoas.push(nomeConvidado);
document.getElementById("mostrarnomes").innerHTML=nomepessoas.toString();

}
function nomeslista(){
var i = nomepessoas.join("<br>")
document.getElementById("nomesEmLista").innerHTML=i.toString();
}
function emOrdemAlfabetica(){ 
    nomepessoas.sort();
    var i = nomepessoas.join("<br>")
    document.getElementById("emOrdemAlfabetica").innerHTML=i.toString();

}
function pesquisarNome(){
var s = document.getElementById("pesquisarNome").value;
var encontrado = 0
var contador;

for (contador=0; contador<nomepessoas.length;contador++){
    if (s== nomepessoas [contador]){
        encontrado=encontrado + 1;
    }
    }
document.getElementById("nomesLocalizados").innerHTML = "nome encontrado" + encontrado + "vez(es)";  


}