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

function erro() {
    erro_dia.textContent = "Preencha este campo!";
    erro_mes.textContent = "Preencha este campo!";
    erro_ano.textContent = "Preencha este campo!";
    
};
function removerMensagens (){
    setTimeout(function(){
        erro_dia.textContent = "";
        erro_mes.textContent = "";
        erro_ano.textContent = "";
    }, 2000)
}
function erroDia(){
    erro_dia.textContent = "Dia inválido!";
    return;
}
function erroMes(){
    erro_mes.textContent = "Mês inválido!";
    return;
}
function erroAno(){
    erro_ano.textContent = "Ano inválido!";
    return;
}
function dataIncompativel(){
    erro_dia.textContent = "Data incompatível!";
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
        removerMensagens();
        return erroDia();
    }
});
entrada_mes.addEventListener("input", (e) =>{
    if(entrada_mes.value >= 13){
        removerMensagens();
        return erroMes();
    }
});
entrada_ano.addEventListener("input", (e) =>{
    if(entrada_ano.value >= 2024){
        removerMensagens();
        return erroAno();
    }
});
