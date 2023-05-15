const btn = document.querySelector('#calcular')
const inputPrice = document.querySelector('#price')
const inputDisc = document.querySelector('#discount')
const pResult = document.querySelector('#result')

function calcularPrecioDto(){
  const price = parseInt(inputPrice.value)
  const dis = parseInt(inputDisc.value)
  if(!price || !dis){
    pResult.innerText = 'Clancla por favor llena el formulario'
    return
  }  
  if(dis >100){
    pResult.innerText = 'Ajá, ya quisieras no te vamos a dar plata, paga'
    return
  }
  const newPrice = (price *(100 - dis))/100
  pResult.innerText = 'el nuevo resultado es $' + newPrice
}
btn.addEventListener('click', calcularPrecioDto)