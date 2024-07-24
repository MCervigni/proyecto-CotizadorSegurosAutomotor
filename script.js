// Arrays para opciones de tipo de vehículo, localidad y tipo de seguro
const tiposAutomotor = ["Sedan", "SUV", "Camioneta Pick Up"];
const localidades = ["Capital de provincia", "Interior de provincia"];
const tiposSeguro = ["Plan Básico", "Plan Completo"];

// Función para obtener una opción válida del usuario
function obtenerOpcionValida(opciones, mensaje) {
    let opcionValida = false;
    let opcion;
    while (!opcionValida) {
        let entrada = prompt(mensaje);
        opcion = parseInt(entrada);
        if (!isNaN(opcion) && opcion >= 1 && opcion <= opciones.length) {
            opcionValida = true;
        } else {
            alert(`Por favor, ingrese una opción válida (1-${opciones.length})`);
        }
    }
    return opcion - 1; // Se resta 1 para ajustar al índice del array
}

// Función para obtener un valor numérico válido del usuario
function obtenerValorNumerico(mensaje) {
    let valorValido = false;
    let valor;
    while (!valorValido) {
        let entrada = prompt(mensaje);
        valor = parseFloat(entrada);
        if (!isNaN(valor) && valor > 0) {
            valorValido = true;
        } else {
            alert(`Por favor, ingrese un valor numérico válido.`);
        }
    }
    return valor;
}

// Función principal para cotizar el seguro
function cotizarSeguro() {
  // Pedir valor del auto
  let valorAuto = obtenerValorNumerico("Ingrese el valor del auto:");

  // Obtener tipo de automotor
  let tiposAutomotorValido = obtenerOpcionValida(
    tiposAutomotor,
    "Seleccione el tipo de automotor:\n1. Sedan\n2. SUV\n3. Camioneta Pick Up"
  );

  // Obtener localidad
  let localidadValido = obtenerOpcionValida(
    localidades,
    "Seleccione la localidad:\n1. Capital de provincia\n2. Interior de provincia"
  );

  // Obtener tipo de seguro
  let tipoSeguroValido = obtenerOpcionValida(
    tiposSeguro,
    "Seleccione el tipo de seguro:\n1. Plan Básico\n2. Plan Completo"
  );

  // Cálculo de la tasa de seguro según tipo de automotor, localidad y tipo de seguro
  let tasa = 0;

  switch (tiposAutomotorValido) {
    case 0: // Sedan
      tasa = 0.02;
      break;
    case 1: // SUV
      tasa = 0.03;
      break;
    case 2: // Camioneta Pick Up
      tasa = 0.05;
      break;
  }

  if (localidadValido === 0) {
    // Capital de provincia
    tasa += 0.02;
  } else {
    // Interior de provincia
    tasa += 0.005;
  }

  if (tipoSeguroValido === 0) {
    // Plan Básico
    tasa += 0.005;
  } else {
    // Plan Completo
    tasa += 0.03;
  }

  // Cálculo costo del seguro
  let costoSeguro = valorAuto * tasa;

  // Cálculo valor de cada cuota mensual (12 meses)
  let valorCuota = costoSeguro / 12;

  // Mostrar resumen y resutado de la cotización al usuario
  alert(`Resumen de cotización:\n
           - Valor del auto: $${valorAuto.toFixed(2)}\n
           - Localidad: ${localidades[localidadValido]}\n
           - Tipo de automotor: ${tiposAutomotor[tiposAutomotorValido]}\n
           - Tipo de seguro: ${tiposSeguro[tipoSeguroValido]}\n
           - Costo de la Póliza Anual: $${costoSeguro.toFixed(2)}\n
           - Costo de cuota mensual (12 cuotas): $${valorCuota.toFixed(2)}`);
}

// === Ejecución de función principal ===
cotizarSeguro();
