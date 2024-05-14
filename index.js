
function calcClass(){
let xp = document.getElementById("resposta").value;
let strResult = ["ferro","bronze","prata","ouro"];
const resultFinal = "O herói está no nível de"

let result = document.getElementById("resultado")
let classe = 
[
    document.getElementById("ferro"),
    document.getElementById("bronze"),
    document.getElementById("prata"),
    document.getElementById("ouro"),
];
if (xp == "1"){
    classe[0].style.display = "block";
    classe[1].style.display = "none";
    classe[2].style.display = "none";
    classe[3].style.display = "none";
    result.innerHTML = `${resultFinal} ${strResult[0]}`
}
if (xp == "2"){
    classe[0].style.display = "none";
    classe[1].style.display = "block";
    classe[2].style.display = "none";
    classe[3].style.display = "none";
    result.innerHTML = `${resultFinal} ${strResult[1]}`
}
if (xp == "3"){
    classe[0].style.display = "none";
    classe[1].style.display = "none";
    classe[2].style.display = "block";
    classe[3].style.display = "none";
    result.innerHTML = `${resultFinal} ${strResult[2]}`

}
if (xp == "4"){
    classe[0].style.display = "none";
    classe[1].style.display = "none";
    classe[2].style.display = "none";
    classe[3].style.display = "block";
    result.innerHTML = `${resultFinal} ${strResult[3]}`
}

function cancelar(){

while(!xp){
    classe[0].style.display = "none";
    classe[1].style.display = "none";
    classe[2].style.display = "none";
    classe[3].style.display = "none";
    result.innerHTML = "";
    break

}
}


 
}
calcClass();


