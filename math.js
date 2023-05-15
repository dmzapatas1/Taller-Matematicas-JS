console.group('Cuadrado')
const ladoC = 6;
const perC = ladoC*4;

const areaC=ladoC**2

console.log({
  ladoC,
  perC,
  areaC,
})
function carcularC(lado){
  return {
    perimetro: lado*4,
    area: lado**2
  }
}
console.groupEnd('Cuadrado')

console.group('Triangulo')
const ladoTa = 6;
const ladoTb = 6;
const ladoTbase = 4;
const alturaT = 5.5

const pT = ladoTa+ladoTb+ladoTbase
const areaT = (ladoTbase* alturaT)/2

function carcularT(ladoA, ladob, base, alt){
  return {
    perimetro: ladoA+ladob+base,
    area: (base*alt)/2
  }
}

function calcularAltT(lado1,base){
  if(lado1==base){
    console.warn('este no es un triangulo isosceles')
  }else{
    return Math.sqrt((lado1**2)-((base**2))/4)
  }
}

console.log({
  ladoTa,
  ladoTb,
  ladoTbase,
  alturaT,
  pT,
  areaT
})

console.groupEnd('Triangulo')

console.group('Circulo')
const radioC = 3


function calcularC(radio){
  const radioalCuadrado= Math.pow(radio,2)
  return {
    circunferencia:(2*radio)*Math.PI ,
    area:radioalCuadrado*Math.PI
  }
}
console.log(calcularC(3))
console.groupEnd('Circulo')

console.group('porcentajes')

console.groupEnd('porcentajes')

