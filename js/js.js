
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
saida_botao.addEventListener('clique', calcularIdade());
entrada_dia.addEventListener("input" , (e) => {
    if(+entrada_dia.value > 31){
        erro_dia.textContent = "Número incorreto!"
        isValid = false ;
        return;
    } else {
        isValid = true;
        erro_dia.textContent = "";
    }
    if(+entrada_dia.value == 0){
        isValid = false;
        erro_dia.textContent = "Número incorreto!"
        isValid = false;
        return;
    } else {
        erro_dia.textContent = "";
    }
});
entrada_mes.addEventListener("input" , (e) => {
    if(+entrada_mes.value > 12){
        erro_mes.textContent = "Número incorreto!"
        isValid = false ;
        return;
    } else {
        isValid = false;
        erro_mes.textContent = "";
    }
    if(+entrada_mes.value === 0){
        isValid = false;
        erro_mes.textContent = "Número incorreto!"
        isValid = false;
        return;
    } else {
        erro_mes.textContent = "";
    }
}); 
entrada_ano.addEventListener("input" , (e) => {
    if(+entrada_ano.value > 2023 ){
        erro_ano.textContent = "Número incorreto!"
        isValid = false ;
        return;
    } else {
        isValid = false;
        erro_ano.textContent = "";
    }
    if(+entrada_ano.value === 0){
        isValid = false;
        erro_ano.textContent = "Número incorreto!"
        isValid = false;
        return;
    } else {
        erro_ano.textContent = "";
    }
});

function calcularIdade(){
    if(calcularIdade){
        var aniversario =`${entrada_mes.value}/${entrada_dia.value}/${entrada_ano.value}`;
        console.log(aniversario);
        var aniversarioObj = new Date(aniversario);
        var ageDiffMill = Date.now() - aniversarioObj;
        var ageDate = new Date(ageDiffMill);
        var ageAnos = ageDate.getUTCFullYear() - 1970;
        var ageMonth = ageDate.getUTCMonth();
        var ageDays = ageDate.getUTCDay();

        saida_ano.textContent = ageAnos;
        saida_mes.textContent = ageMonth;
        saida_dia.textContent = ageDays;
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}




