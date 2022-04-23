let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor:  80.0}, 
    {produto: 'Salto agulha 39', valor:  250.0}, 
    {produto: 'Tênis casual preto', valor:  120.0}, 
    {produto: 'meia calça transparente', valor:  30.0}]
    console.table (clienteLilit)
    console.log ("Tabela de compra de Lilit")

let clienteJordana = [
     {produto: 'gel lubrificante', valor: 30.0},
     {produto: 'camisinha extra sensivel', valor: 15.0},
     {produto: 'vibrador egg', valor: 20.0},
     {produto: 'pênis de silicone vibrador', valor: 100.0},
     {produto: 'chuca reutilizável', valor: 40.0},
     {produto: 'massageador prostatico de dedo', valor: 20.0},
     {produto: 'bolas massageadoras estouráveis', valor: 20.0},
     {produto: 'gel beijavel', valor: 15.0},
     {produto: 'coelhinho masturbador', valor: 150.0},
     {produto: 'fantasia mulher gato', valor: 200.0},
     {produto: 'livro de kama sutra', valor: 50.0},
     {produto: 'alegmas', valor: 50.0}]
    console.table (clienteJordana)
    console.log ("Tabela de Compras de Jordana") 

let clienteMelquiades = [
    {produto: 'gel lubrificante', valor: 30.0},
    {produto: 'camisinha extra grande', valor: 15.0},
    {produto: 'erva calmante', valor: 50.0},
    {produto: 'cueca jockstrap', valor: 30.0},
    {produto: 'chuca reutilizável', valor: 40.0},
    {produto: 'massageador prostático', valor: 20.0},
    {produto: 'gel anal', valor: 20.0},
    {produto: 'gel beijavel', valor: 15.0},
    {produto: 'chicote bsdm', valor: 150.0},
    {produto: 'fantasia professora', valor: 200.0},
    {produto: 'livro da fada boqueteira', valor: 50.0},
    {produto: 'alegmas', valor: 50.0},
    {produto: 'anel peniano', valor: 40.0},
    {produto: 'baralho de posição ka sutra', valor: 20.0},
    {produto: 'coleira dome', valor: 50.0},]
    console.table(clienteMelquiades)
    console.log ("Tabela de Compras de Melquiades")

let valorTotal = [] 
let descontoAplicado = []
let quantidadeDeProdutos = 0

    function calcularDesconto(valor) {
    if (valor >= 200.0){
        descontoAplicado.push(valor * 0.5)
    } else if (valor >= 100.00) {
        descontoAplicado.push(valor *0.2)
    } else if (valor >= 80.0) {
        descontoAplicado.push(valor * 0.1)
    } else if (valor >= 50.0) { 
        descontoAplicado.push(valor * 0.05)
     }
    }

    //função de compras          

function realizarCompra(comprasDaCliente) { 
     quantidadeDeProdutos = comprasDaCliente.length
    comprasDaCliente.forEach(item=> {
            valorTotal.push(item.valor)
            calcularDesconto(item.valor)
        })
            
             
// console.log (valorTotal)
// console.log (descontoAplicado)

valorTotal = valorTotal.reduce((acumulador, atual) => acumulador + atual)

// console.log(valorTotal)
descontoAplicado = descontoAplicado.reduce((acumulador, atual) => acumulador + atual)
let valorFinal = valorTotal - descontoAplicado

let dataDaCompra = new Date()

let notaFiscal = {
    "Aqué Total":`R$${valorTotal.toFixed(2).replace('.', ',')}`,
     "Regalo Aplicado":`R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
    "Aqué Final":`R$${valorFinal.toFixed(2).replace('.', ',')}`,
    "Data da Compra": dataDaCompra.toLocaleDateString ("pt-BR",{
        hour:"numeric",
        minute: "numeric",
        second:"numeric"
                })
            }
if (quantidadeDeProdutos > 10 || valorFinal > 800.0) {
    return console.table ({
    ...notaFiscal,
        Mensagem:"Parabéns Mona!!!: A senhora ganhou um regalo de R$ 50,00 Arô Arô para a sua próxima compra"
                })
        } else {
                return console.table(notaFiscal)
            }
        
}
    

realizarCompra(clienteLilit)
// console.log ("Valores de compra de Lilit")
// realizarCompra(clienteJordana) 
// console.log ("Valores de Compras de Jordana")
// realizarCompra(clienteMelquiades)
// console.log ("Vaores de Compras de Melquiades")