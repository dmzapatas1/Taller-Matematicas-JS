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

console.log({
  ladoTa,
  ladoTb,
  ladoTbase,
  alturaT,
  pT,
  areaT
})

console.groupEnd('Triangulo')