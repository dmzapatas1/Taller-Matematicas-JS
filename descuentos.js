const btn = document.querySelector('#calcular')
const btnC = document.querySelector('#calcularC')
const inputPrice = document.querySelector('#price')
const inputDisc = document.querySelector('#discount')
const pResult = document.querySelector('#result')
const inputCupon = document.querySelector('#cupon')

// const cuponObj = {
//   'DANI10': 25,
//   'WAL30' : 50,
//   'MAY01' : 60
// }
const cuponList = []
cuponList.push({
  name: "DANI",
  discount : 30
})
cuponList.push({
  name: "DANI1",
  discount : 25
})
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

function calcularDtoCupon(){
  
  const price = parseInt(inputPrice.value)
  const cupon = inputCupon.value

  if(!price || !cupon){
    pResult.innerText = 'Clancla por favor llena el formulario'
    return
  }  

  let discount;

  function isCuponInArray(cuponElement){
    return cuponElement.name == cupon
     
  }
  const cuponInArray = cuponList.find(isCuponInArray)

  if(cuponInArray){
    discount = cuponInArray.discount
  }else{
    pResult.innerText = "el cupon no es valido"
    return
  }

  //solucion2
  // if(cuponObj[cupon]){
  //   discount = cuponObj[cupon]
  // }else{
  //   pResult.innerText = "el cupon no es valido"
  //   return
  // }

  //solucion1
  // if(cupon == "JuanDC_es_Batman"){
  //   discount = 30
  // }else if(cupon == "no_le_digas_a_nadie"){
  //   discount = 25
  // } else{
  //   pResult.innerText = "el cupon no es valido"
  //   return
  // }

  const newPrice = (price *(100 - discount))/100
  pResult.innerText = 'el nuevo resultado es $' + newPrice
}
btn.addEventListener('click', calcularPrecioDto)
btnC.addEventListener('click', calcularDtoCupon)