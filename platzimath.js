
PlatziMath = {}

PlatziMath.calcularP = function calcularP(lista){
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

PlatziMath.esPar = function esPar(lista){
  return !(lista.length % 2)
}
PlatziMath.esImpar = function esImpar(lista){
  return (lista.length % 2)
}

PlatziMath.calcularMediana = function calcularMediana(lista){
  const listaOrd = lista.sort((a,b)=>(a-b))
  const listaEsPar = PlatziMath.esPar(listaOrd)
  console.log(listaOrd)
  if (listaEsPar){
    const index1 = (listaOrd.length/2)-1
    const index2 = listaOrd.length/2
    return PlatziMath.calcularP([listaOrd[index1], listaOrd[index2]])

  }else{
   const medianaImpar = Math.floor(listaOrd.length/2)
   return listaOrd[medianaImpar]
  }
}

PlatziMath.calcularModa = function calcularModa(lista){
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
  function solution(){
    const listaX = {
      123: "dani",
      234: "meli"
    }
  
    console.log(listaX)
  }
  
  return moda

  
}

PlatziMath.ordenarListaBi = function ordenarListaBi(lista,i){
  function ordenarListaSort(valorAcumulado, nuevoValor){
    return valorAcumulado[i]-nuevoValor[i]
  }
 const listaA = lista.sort(ordenarListaSort)

 return listaA
}

function solution(lista){
  const listaX = Object.entries(lista)
  let ar =[]
  const a= listaX.forEach(element => {
    ar.push({id: element[0],
      name : element[1]
      })
  })
  return ar
}
