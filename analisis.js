console.log(salarios)

//analisis Juanita

function encontrarPersona(personaEnBusqueda){
  return salarios.find(persona => persona.name == personaEnBusqueda)
}

function medianaPorPersona(nombrePersona){
  const trabajos = encontrarPersona(nombrePersona).trabajos

  const salarios = trabajos.map(function(elemento){
    return elemento.salario
  })

  const medianaSalarios = PlatziMath.calcularMediana(salarios)

   return medianaSalarios
}

function proyeccionPersona(nombrePersona){
  const trabajos = encontrarPersona(nombrePersona).trabajos

  let porcentajesCrecimiento = []

  for (let i = 1; i < trabajos.length; i++){
    const salarioActual = trabajos[i].salario
    const salarioAnterior = trabajos[i-1].salario
    const crecimiento = salarioActual - salarioAnterior
    const porcentajeCrecimiento = crecimiento/salarioAnterior
    porcentajesCrecimiento.push(porcentajeCrecimiento)
  }
 
  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)

  //console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento})

  const ultimoSalario = trabajos[trabajos.length-1].salario
  const aumento = ultimoSalario*medianaPorcentajesCrecimiento
  const nuevoSalario = ultimoSalario + aumento

  return nuevoSalario
}