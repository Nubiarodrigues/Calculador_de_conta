function formatar(valor){
    valor = Math.ceil(valor * 100) / 100
    valor = valor.toFixed(2)
    return 'R$' + valor
}

function formatarPessoa(valor){
    if (valor == 1)
        return valor + ' Pessoa'
    else if (valor == 0)
        return valor + ''
    else
        return valor + ' Pessoas'
}

function atualizando (){
    let conta = Number(document.getElementById('entrada1').value)
    let gorjeta = document.getElementById('selecionar1').value
    let dividir = document.getElementById('selecionar2').value
    
    let valor = conta * (gorjeta / 100)
    let total = conta + valor
    let divisao = total / dividir
   
    document.getElementById('porcetagem').innerHTML = gorjeta + ' %'
    document.getElementById('tip').innerHTML =  formatar(valor)
    document.getElementById('total').innerHTML =  formatar(total)
    document.getElementById('pessoas').innerHTML =  formatarPessoa(dividir)
    document.getElementById('dividir').innerHTML = formatar(total / dividir)

     
}

