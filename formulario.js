import { convertirPDF } from "./convertirArchivo.js"; // Importamos el archivo encargado de converitir los archivos a PDF

// Mandamos a llamar a los elementos del formulario
let noInsidente = document.getElementById("noInsidente");
let fecha = document.getElementById("fecha");
let nombre = document.getElementById("nombre");
let noEmpleado = document.getElementById("noEmpleado");
let ubicacion = document.getElementById("ubicacion");
let noContacto = document.getElementById("noContacto");
let unidadDeNegocio = document.getElementById("unidadDeNegocio");
let marca = document.getElementById("marca");
let modelo = document.getElementById("modelo");
let placa = document.getElementById("placa");
let dominio = document.getElementById("dominio");
let aditamento = document.getElementById("aditamento");
let problemaRPC = document.getElementById("problemaRPC");
let repaldar = document.getElementById("repaldar");
let softwareA = document.getElementById("softwareA");
let condicionesFDE = document.getElementById("condicionesFDE");
let ingenieroNombre = document.getElementById("ingenieroNombre");

// Mensaje de las firmas
let alertIngeniero = document.getElementById("alertIngeniero");
let alertCliente1 = document.getElementById("alertCliente1");
let alertCliente2 = document.getElementById("alertCliente2");

// SI Y NO
let tieneSap = document.getElementById("tieneSap");
let oneDrive = document.getElementById("oneDrive");
let permisosDD = document.getElementById("permisosDD");
let impresoraP = document.getElementById("impresoraP");
let teams = document.getElementById("teams");
let vpn = document.getElementById("vpn");
let permisosUSB = document.getElementById("permisosUSB");
let compartidosDR = document.getElementById("compartidosDR");
let pst = document.getElementById("pst");
let tipoLDO = document.getElementById("tipoLDO");
let cifradoDE = document.getElementById("cifradoDE");
let llavesPGP = document.getElementById("llavesPGP");

// Firma
/*const ingernieroFirma = document.getElementById("ingernieroFirma");
const clienteFirma1 = document.getElementById("clienteFirma1");
const clienteFirma2 = document.getElementById("clienteFirma2");

//***************************** MAIN  *****************************************************/
// En caso de que SI existan datos ejecutar...
if (localStorage.getItem("enviarDato")) {
  // Bloquea la la tecla ENTER
  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  });

  let myData = JSON.parse(localStorage.getItem("enviarDato")); // Accedemos a los valores de LOCAL STROGE como objeto

  // Nombre del formulario obtenido del archivo historial.js
  const nomArchivo = myData.nom; // VARIABLE IMPORTANTE, NOMBRE DEL FORMULARIO

  // Eliminamos el dato que mandamos el LOCAL STORAGE para recibir el nombre del archivo
  localStorage.removeItem("enviarDato");

  console.log(`Recibimos variable del otro archivo ${nomArchivo}`);

  /* CARGAR DAATOS
  ----------------------------------------------------------------------------🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩
  ----------------------------------------------------------------------------- */
  let cargar = JSON.parse(localStorage.getItem("MisDatos"));
  const valoresCarga = cargar.filter(
    (cargar) => cargar.nombre_archivo === nomArchivo
  );

  console.log(valoresCarga[0]);
  // Cargar Formulario
  noInsidente.value = valoresCarga[0].noInsidente;
  fecha.value = valoresCarga[0].fecha;
  nombre.value = valoresCarga[0].nombre;
  noEmpleado.value = valoresCarga[0].noEmpleado;
  ubicacion.value = valoresCarga[0].ubicacion;
  noContacto.value = valoresCarga[0].noContacto;
  unidadDeNegocio.value = valoresCarga[0].unidadDeNegocio;
  marca.value = valoresCarga[0].marca;
  modelo.value = valoresCarga[0].modelo;
  placa.value = valoresCarga[0].placa;
  dominio.value = valoresCarga[0].dominio;
  aditamento.value = valoresCarga[0].aditamento;
  problemaRPC.value = valoresCarga[0].problemaRPC;
  repaldar.value = valoresCarga[0].repaldar;
  softwareA.value = valoresCarga[0].softwareA;
  condicionesFDE.value = valoresCarga[0].condicionesFDE;
  ingenieroNombre.value = valoresCarga[0].ingenieroNombre;

  // SI NO
  tieneSap.value = valoresCarga[0].tieneSap;
  oneDrive.value = valoresCarga[0].oneDrive;
  permisosDD.value = valoresCarga[0].permisosDD;
  impresoraP.value = valoresCarga[0].impresoraP;
  teams.value = valoresCarga[0].teams;
  vpn.value = valoresCarga[0].vpn;
  permisosUSB.value = valoresCarga[0].permisosUSB;
  compartidosDR.value = valoresCarga[0].compartidosDR;
  pst.value = valoresCarga[0].pst;
  tipoLDO.value = valoresCarga[0].tipoLDO;
  cifradoDE.value = valoresCarga[0].cifradoDE;
  llavesPGP.value = valoresCarga[0].llavesPGP;

  // EN CASO DE QUE EXISTA ALGO EN EL LOCAL STORAGE DIBUJAR LA FIRMA EN EL CAMPO CORRESPONDIENTE
  let ingenieroF = valoresCarga[0].ingernieroFirma;
  let cliente1F = valoresCarga[0].clienteFirma1;
  let cliente2F = valoresCarga[0].clienteFirma2;

  if (ingenieroF !== "") {
    // Mostrar Mensaje de que la firma ya ha sido cargada
    alertIngeniero.innerText = `La firma del INGENIERO ${valoresCarga[0].ingenieroNombre} ha sido GUARDADA`;
  }

  if (cliente1F !== "") {
    // Mostrar Mensaje de que la firma ya ha sido cargada
    alertCliente1.innerText = `La firma de CHECK LIST del cliente ${valoresCarga[0].nombre} ha sido GUARDADA`;
  }

  if (cliente2F !== "") {
    // Mostrar Mensaje de que la firma ya ha sido cargada
    alertCliente2.innerText = `La firma de CONFIRMACION del cliente ${valoresCarga[0].nombre} ha sido GUARDADA`;
  }

  /* CARGAR DAATOS
  -----------------------------------------------------------------------------
  ----------------------------------------------------------------------------- */
  convertirPDF(nomArchivo, ingenieroF, cliente1F, cliente2F); // Ejecutamos la funcion para crear el PDF y tambien esta el boton GUARDAR
} else {
  // En caso de que NO existan datos ejecutar...
  alert("¡LOS DATOS NO SE CARGARON CORRECTAMENTE!");
}
//***************************** MAIN  *****************************************************/
