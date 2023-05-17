//[1,2,3,4]


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
