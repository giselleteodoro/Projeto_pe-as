var listaDePecas = ["Amortecedor","filtro de ar","coxin"]

if (listaDePecas.length < 10){
    console.log("É possível cadastrar mais peças")
    //É possivel cadastrar
} else {
    console.log("não é possível cadastrar mais peças")
}



let peso = 50;
if(peso<100){
    console.log("A peca deve pesar no mínimo 100g")
}else {
    console.log("A peca possui peso adequado")
}


let nomePeca ="Disco de Freio"
if (nomePeca.length>3){
    console.log("nome de peca está adequado para o cadastro!")
}else if(nomePeca.length ==0){
    console.log("O nome da peça não pode ser vazio")
}else{
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}