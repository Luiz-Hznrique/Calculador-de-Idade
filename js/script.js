// saída dos resultados que o usuário inserir
const saida_ano = document.querySelector('#Years');
const saida_mes = document.querySelector('#Months');
const saida_dia = document.querySelector('#Days');
const saida_botao = document.querySelector('#button');
//Entrada de dados do usuário:
const entrada_ano = document.querySelector("#year");
const entrada_mes = document.querySelector("#month");
const entrada_dia = document.querySelector("#day");
// Erros caso usuário não insira dados corretos:
const erro_ano = document.querySelector("#error-year");
const erro_mes = document.querySelector("#error-month");
const erro_dia = document.querySelector("#error-day");
let bordaBranca = document.querySelectorAll('.cor');
let fonte = document.querySelectorAll('label');

function calcularIdade(){
    if(calcularIdade){
        var aniversario =`${entrada_mes.value}/${entrada_dia.value}/${entrada_ano.value}`;
        console.log(aniversario);
        var aniversarioObj = new Date(aniversario);
        var ageDiffMill = Date.now() - aniversarioObj;
        var anoTotal = new Date(ageDiffMill);
        var ageAnos = anoTotal.getUTCFullYear() - 1970;
        var ageMonth = anoTotal.getUTCMonth();
        var ageDays = anoTotal.getUTCDate();
        
        saida_ano.textContent = ageAnos;
        saida_mes.textContent = ageMonth;
        saida_dia.textContent = ageDays;
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}
saida_botao.addEventListener("click", calcularIdade);
function borderRed(){
    bordaBranca[1].setAttribute('class', 'red')
    bordaBranca[3].setAttribute('class', 'red')
    bordaBranca[5].setAttribute('class', 'red')
}
function erro() {
        fonte[0].setAttribute('class', 'fonte')
        fonte[1].setAttribute('class','fonte')
        fonte[2].setAttribute('class','fonte')
        erro_dia.textContent = "Preencha este campo!";
        erro_mes.textContent = "Preencha este campo!";
        erro_ano.textContent = "Preencha este campo!";
        borderRed();     
};
function removerMensagens (){
    setTimeout(function(){
        fonte[0].setAttribute('class','label')
        fonte[1].setAttribute('class','label')
        fonte[2].setAttribute('class','label')
        bordaBranca[1].setAttribute('class', 'white')
        bordaBranca[3].setAttribute('class', 'white')
        bordaBranca[5].setAttribute('class', 'white')
        erro_dia.textContent = "";
        erro_mes.textContent = "";
        erro_ano.textContent = "";
    },2000)
}
function removeErro(){
    fonte[0].setAttribute('class','label')
    fonte[1].setAttribute('class','label')
    fonte[2].setAttribute('class','label')
    bordaBranca[1].setAttribute('class', 'white')
    bordaBranca[3].setAttribute('class', 'white')
    bordaBranca[5].setAttribute('class', 'white')
    erro_dia.textContent = "";
    erro_mes.textContent = "";
    erro_ano.textContent = "";
}
function erroDia(){
    erro_dia.textContent = "Dia inválido!";
     fonte[0].setAttribute('class', 'fonte')
     bordaBranca[1].setAttribute('class', 'red')
    return;
}
function erroMes(){
    erro_mes.textContent = "Mês inválido!";
    fonte[1].setAttribute('class', 'fonte')
    bordaBranca[3].setAttribute('class', 'red')
    return;
}
function erroAno(){
    erro_ano.textContent = "Ano inválido!";
    fonte[2].setAttribute('class', 'fonte')
    bordaBranca[5].setAttribute('class', 'red')
    return;
}
saida_botao.addEventListener("click", function (calcularIdade) {
    if(entrada_dia.value === "" && entrada_mes.value === "" && entrada_ano.value === ""){
        removerMensagens();
        return erro();
    } else {
        return false;
    }
});
entrada_dia.addEventListener("input", (e) =>{
    if(entrada_dia.value >= 32){
        return erroDia();
    } else{
        removeErro();
    }
});
entrada_mes.addEventListener("input", (e) =>{
    if(entrada_mes.value >= 13){
        return erroMes();
    } else {
        removeErro();
    }
});
entrada_ano.addEventListener("input", (e) =>{
    if(entrada_ano.value >= 2024){
        return erroAno();
    } else {
        removeErro();
    }
});
