
function calcularP(lista){
  // let sumaL = 0
  // for (let i=0; i<lista.length;i++){
  //   sumaL = sumaL + lista[i]
  // }

  //usando el metodo reduce
  function suma(valorA, nuevoV){
    return valorA + nuevoV
  }
  const sumaL = lista.reduce(suma)
const P= sumaL/ lista.length
return P
}
function esPar(lista){
  return !(lista.length % 2)
}
function esImpar(lista){
  return (lista.length % 2)
}

function calcularMediana(lista){
  const listaOrd = lista.sort()
  const listaEsPar = esPar(listaOrd)
  console.log(listaOrd)
  if (listaEsPar){
    const index1 = (listaOrd.length/2)-1
    const index2 = listaOrd.length/2
    return calcularP([listaOrd[index1], listaOrd[index2]])

  }else{
   const medianaImpar = Math.floor(listaOrd.length/2)
   return listaOrd[medianaImpar]
  }
}

function calcularModa(lista){
  const listaCount = {};

  for(let i=0; i<lista.length; i++){
    const elemento = lista[i]
    if(listaCount[elemento]){
      listaCount[elemento]+=1
    }else{
      listaCount[elemento]=1
    }
  }
  console.log(listaCount)
  
  const listaArray = Object.entries(listaCount)

  const listaO = ordenarListaBi(listaArray,1)
  const listaLastItem = listaO[listaO.length-1]
  //console.log({listaCount, listaArray, listaO, listaLastItem})
  const moda = listaLastItem[0]
  //console.log('la moda es '+ listaLastItem[0])
  return moda
}

function ordenarListaBi(lista,i){
  function ordenarListaSort(valorAcumulado, nuevoValor){
    return valorAcumulado[i]-nuevoValor[i]
  }
 const listaA = lista.sort(ordenarListaSort)

 return listaA
}