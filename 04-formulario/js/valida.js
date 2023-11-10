document.getElementById("validarbutton").
addEventListener("click",function(){
    //alert("Deu certo");
    const cpf = document.getElementById("cpfInput").value;
    if(validacpf(cpf)){
        document.getElementById("resultado").textContent = "CPF valido"
    }else(
        document.getElementById("resultado").textContent = "CPF valido"
    )
})
function validacpf(vrCPF){
    //implementar as regras de validação de CPF
    return vrCPF.length === 11 & !isNaN(vrCPF);
}