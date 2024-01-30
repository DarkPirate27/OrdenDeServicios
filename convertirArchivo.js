let signaturePadIngeniero = null;
let signaturePadCliente1 = null;
let signaturePadCliente2 = null;

export const convertirPDF = (nomArchivo, ingenieroF, cliente1F, cliente2F) => {
  window.addEventListener("load", async () => {
    // Mandamos a llamar a los elementos del formulario
    let archivo = document.getElementById("nombre_archivo");
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

    // Inicializar el canvas para las firmas
    const ingernieroFirma = document.getElementById("ingernieroFirma");
    const clienteFirma1 = document.getElementById("clienteFirma1");
    const clienteFirma2 = document.getElementById("clienteFirma2");

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    // Firma del Ingeniero
    ingernieroFirma.width = ingernieroFirma.offsetWidth * ratio;
    ingernieroFirma.height = ingernieroFirma.offsetHeight * ratio;
    ingernieroFirma.getContext("2d").scale(ratio, ratio);

    // Firma del Cliente Check List
    clienteFirma1.width = clienteFirma1.offsetWidth * ratio;
    clienteFirma1.height = clienteFirma1.offsetHeight * ratio;
    clienteFirma1.getContext("2d").scale(ratio, ratio);

    // Firma del Cliente Confirmacion
    clienteFirma2.width = clienteFirma2.offsetWidth * ratio;
    clienteFirma2.height = clienteFirma2.offsetHeight * ratio;
    clienteFirma2.getContext("2d").scale(ratio, ratio);

    // Creamos el Pad con la libreria agragada
    signaturePadIngeniero = new SignaturePad(ingernieroFirma, {
      penColor: "rgb(0,0,0)",
      minWidth: 3.5,
      maxWidth: 5,
    });
    signaturePadCliente1 = new SignaturePad(clienteFirma1, {
      penColor: "rgb(0,0,0)",
      minWidth: 3.5,
      maxWidth: 5,
    });
    signaturePadCliente2 = new SignaturePad(clienteFirma2, {
      penColor: "rgb(0,0,0)",
      minWidth: 3.5,
      maxWidth: 5,
    });

    // Mandamos a llamar valores del DOM del formulario
    const botonLimpiarFirmaIngeniero =
      document.getElementById("limpiarIngeniero");
    const botonLimpiarFirmaCliente1 =
      document.getElementById("limpiarCheckList");
    const botonLimpiarFirmaCliente2 =
      document.getElementById("limpiarConfirmar");

    botonLimpiarFirmaIngeniero.addEventListener("click", (e) => {
      e.preventDefault();
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      // Firma del Ingeniero
      ingernieroFirma.width = ingernieroFirma.offsetWidth * ratio;
      ingernieroFirma.height = ingernieroFirma.offsetHeight * ratio;
      ingernieroFirma.getContext("2d").scale(ratio, ratio);
      signaturePadIngeniero.clear();
    });

    botonLimpiarFirmaCliente1.addEventListener("click", (e) => {
      e.preventDefault();
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      // Firma del Cliente Check List
      clienteFirma1.width = clienteFirma1.offsetWidth * ratio;
      clienteFirma1.height = clienteFirma1.offsetHeight * ratio;
      clienteFirma1.getContext("2d").scale(ratio, ratio);
      signaturePadCliente1.clear();
    });

    botonLimpiarFirmaCliente2.addEventListener("click", (e) => {
      e.preventDefault();
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      // Firma del Cliente Confirmacion
      clienteFirma2.width = clienteFirma2.offsetWidth * ratio;
      clienteFirma2.height = clienteFirma2.offsetHeight * ratio;
      clienteFirma2.getContext("2d").scale(ratio, ratio);
      signaturePadCliente2.clear();
    });

    // Programamos el boton PDF y Guardar
    const botonPDF = document.getElementById("pdf");
    const botonGuardar = document.getElementById("guardar");

    // Bloqueamos el PAD en caso de que ya exista una firma
    if (ingenieroF !== "") {
      signaturePadIngeniero.off();
      ingernieroFirma.style.height = "20px";
    }

    if (cliente1F !== "") {
      signaturePadCliente1.off();
      clienteFirma1.style.height = "20px";
    }

    if (cliente2F !== "") {
      signaturePadCliente2.off();
      clienteFirma2.style.height = "20px";
    }

    /* CONVERIR EN PDF
    -----------------------------------------------------------------------------🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩
    ----------------------------------------------------------------------------- */
    botonPDF.addEventListener("click", async (e) => {
      e.preventDefault(); // Evitamos a que se vuelva a recargar la pagina

      // Valores
      let archivoValor = archivo.value;
      let noInsidenteValor = noInsidente.value;
      let fechaValor = fecha.value;
      let nombreValor = nombre.value;
      let noEmpleadoValor = noEmpleado.value;
      let ubicacionValor = ubicacion.value;
      let noContactoValor = noContacto.value;
      let unidadDeNegocioValor = unidadDeNegocio.value;
      let marcaValor = marca.value;
      let modeloValor = modelo.value;
      let placaValor = placa.value;
      let dominioValor = dominio.value;
      let aditamentoValor = aditamento.value;
      let problemaRPCValor = problemaRPC.value;
      let repaldarValor = repaldar.value;
      let softwareAValor = softwareA.value;
      let condicionesFDEValor = condicionesFDE.value;
      let ingenieroNombreValor = ingenieroNombre.value;

      // SI Y NO
      let tieneSapValor = tieneSap.value;
      let oneDriveValor = oneDrive.value;
      let permisosDDValor = permisosDD.value;
      let impresoraPValor = impresoraP.value;
      let teamsValor = teams.value;
      let vpnValor = vpn.value;
      let permisosUSBValor = permisosUSB.value;
      let compartidosDRValor = compartidosDR.value;
      let pstValor = pst.value;
      let tipoLDOValor = tipoLDO.value;
      let cifradoDEValor = cifradoDE.value;
      let llavesPGPValor = llavesPGP.value;

      // GENERAMOS EL PDF
      const image = await cargarImagen("images/ODS.jpg");
      // FIRMAS
      let signatureIngenieroImagen;
      let signatureCliente1Imagen;
      let signatureCliente2Imagen;

      // INGENIERO
      if (
        (!signaturePadIngeniero.isEmpty() && ingenieroF === "") ||
        (signaturePadIngeniero.isEmpty() && ingenieroF === "")
      ) {
        signatureIngenieroImagen = ingernieroFirma.toDataURL();
      } else if (signaturePadIngeniero.isEmpty() && ingenieroF !== "") {
        signatureIngenieroImagen = ingenieroF;
      }

      // CLIENTE 1
      if (
        (!signaturePadCliente1.isEmpty() && cliente1F === "") ||
        (signaturePadCliente1.isEmpty() && cliente1F === "")
      ) {
        signatureCliente1Imagen = clienteFirma1.toDataURL();
      } else if (signaturePadCliente1.isEmpty() && cliente1F !== "") {
        signatureCliente1Imagen = cliente1F;
      }

      // CLIENTE 2
      if (
        (!signaturePadCliente2.isEmpty() && cliente2F === "") ||
        (signaturePadCliente2.isEmpty() && cliente2F === "")
      ) {
        signatureCliente2Imagen = clienteFirma2.toDataURL();
      } else if (signaturePadCliente2.isEmpty() && cliente2F !== "") {
        signatureCliente2Imagen = cliente2F;
      }

      // Orden
      let fechaA = [];

      for (let i = 0; i <= 9; i++) {
        fechaA.push(fechaValor[i]);
      }
      let fechaOrden =
        fechaA[8] +
        fechaA[9] +
        "/" +
        fechaA[5] +
        fechaA[6] +
        "/" +
        fechaA[0] +
        fechaA[1] +
        fechaA[2] +
        fechaA[3];

      // En caso de que no se ingrese nada en la fecha evitamos que se imprima el texto dentro de la condicion
      if (
        fechaOrden ===
        "NaN/undefinedundefined/undefinedundefinedundefinedundefined"
      ) {
        fechaOrden = [""];
      }

      // En caso de que no se llenen todos los datos mandar una ALERTA
      if (
        noInsidenteValor === "" ||
        fechaOrden === "" ||
        noEmpleadoValor === "" ||
        noContactoValor === "" ||
        unidadDeNegocioValor === "" ||
        modeloValor === "" ||
        placaValor === "" ||
        aditamentoValor === "" ||
        problemaRPCValor === "" ||
        repaldarValor === "" ||
        softwareAValor === "" ||
        condicionesFDEValor === "" ||
        ingenieroNombreValor === "" ||
        tieneSapValor === "" ||
        oneDriveValor === "" ||
        permisosDDValor === "" ||
        impresoraPValor === "" ||
        teamsValor === "" ||
        vpnValor === "" ||
        permisosUSBValor === "" ||
        compartidosDRValor === "" ||
        pstValor === "" ||
        tipoLDOValor === "" ||
        cifradoDEValor === "" ||
        llavesPGPValor === "" ||
        ubicacionValor === "" ||
        marcaValor === "" ||
        dominioValor === ""
      ) {
        alert("¡NO DEJES CAMPOS SIN LLENAR!");
      } else {
        const pdf = new jsPDF("p", "pt", "letter"); // Imagen en tamaño carta
        // Firmas del formualrio ORDEN DE SERVICIO
        pdf.addImage(image, "PNG", 0, 0, 620, 792);
        pdf.addImage(signatureIngenieroImagen, "PNG", 95, 580, 60, 60); //x, y, ancho, alto
        pdf.addImage(signatureCliente1Imagen, "PNG", 430, 575, 65, 65);
        pdf.addImage(signatureCliente2Imagen, "PNG", 270, 660, 65, 65);

        // Texto
        pdf.setFontSize(8.7); // Tamaño de la letra
        pdf.text(noInsidenteValor, 152, 92); // x, y
        pdf.text(fechaOrden, 370, 92);
        pdf.text(nombreValor, 152, 125);
        pdf.text(noEmpleadoValor, 152, 142);
        pdf.text(ubicacionValor, 370, 142);
        pdf.text(noContactoValor, 152, 176);
        pdf.text(unidadDeNegocioValor, 370, 176);
        pdf.text(marcaValor, 152, 209);
        pdf.text(modeloValor, 297, 209);
        pdf.text(placaValor, 435, 209);
        pdf.text(placaValor, 435, 209);
        pdf.text(dominioValor, 152, 225);
        pdf.text(aditamentoValor, 371, 225);
        pdf.text(ingenieroNombreValor, 170, 620);

        // Text Area
        pdf.setFontSize(8);
        // Realizamos los saltos de linea correspondientes
        let linesP = pdf.splitTextToSize(problemaRPCValor, 435);
        pdf.text(linesP, 90, 259);
        let linesR = pdf.splitTextToSize(repaldarValor, 435);
        pdf.text(linesR, 89, 322);
        let linesS = pdf.splitTextToSize(softwareAValor, 230);
        pdf.text(linesS, 295, 480);
        let linesC = pdf.splitTextToSize(condicionesFDEValor, 435);
        pdf.text(linesC, 90, 545);

        // Puntos
        pdf.setFontSize(8.5);
        pdf.setFillColor(0, 0, 0);
        if (tieneSapValor === "tieneSap_si") {
          pdf.circle(148, 432, 3.2, "FD"); // x, y
        } else {
          pdf.circle(187, 432, 3.2, "FD");
        }
        if (oneDriveValor === "oneDrive_si") {
          pdf.circle(202, 441, 3.2, "FD");
        } else {
          pdf.circle(242, 441, 3.2, "FD");
        }
        if (permisosDDValor === "permisosDD_si") {
          pdf.circle(204, 451, 3.2, "FD");
        } else {
          pdf.circle(244, 451, 3.2, "FD");
        }
        if (impresoraPValor === "impresoraP_si") {
          pdf.circle(190, 461, 3.2, "FD");
        } else {
          pdf.circle(230, 461, 3.2, "FD");
        }
        if (teamsValor === "teams_si") {
          pdf.circle(137, 471, 3.2, "FD");
        } else {
          pdf.circle(177, 471, 3.2, "FD");
        }
        if (vpnValor === "global") {
          pdf.circle(149, 481, 3.2, "FD");
        } else if (vpnValor === "citrix") {
          pdf.circle(198, 481, 3.2, "FD");
        } else {
          pdf.circle(237, 481, 3.2, "FD");
        }
        if (permisosUSBValor === "permisosUSB_si") {
          pdf.circle(163, 491, 3.2, "FD");
        } else {
          pdf.circle(203, 491, 3.2, "FD");
        }
        if (compartidosDRValor === "compartidosDR_si") {
          pdf.circle(189, 501, 3.2, "FD");
        } else {
          pdf.circle(229, 501, 3.2, "FD");
        }
        if (pstValor === "win") {
          pdf.circle(185, 510, 3.2, "FD");
        } else if (pstValor === "mac") {
          pdf.circle(230, 510, 3.2, "FD");
        } else {
          pdf.circle(268, 510, 3.2, "FD");
        }
        if (tipoLDOValor === "e1") {
          pdf.circle(423, 432, 3.2, "FD"); // x, y
        } else {
          pdf.circle(475, 432, 3.2, "FD");
        }
        if (cifradoDEValor === "cifradoDE_si") {
          pdf.circle(395, 441, 3.2, "FD"); // x, y
        } else {
          pdf.circle(449, 441, 3.2, "FD");
        }
        if (llavesPGPValor === "llavesPGP_si") {
          pdf.circle(367, 451, 3.2, "FD"); // x, y
        } else {
          pdf.circle(421, 451, 3.2, "FD");
        }

        // Descarga el PDF
        if (archivoValor === "") {
          pdf.save("OrdenDeServicio.pdf");
        } else {
          pdf.save(archivoValor + ".pdf");
        }
      }
    });
    /* CONVERIR EN PDF
    -----------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */

    /* GUARDAR
    -----------------------------------------------------------------------------🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩
    ----------------------------------------------------------------------------- */
    botonGuardar.addEventListener("click", (e) => {
      e.preventDefault(); // Evitamos a que se vuelva a recargar la pagina

      let num = 1;

      // Valores
      let noInsidenteValor = noInsidente.value;
      let fechaValor = fecha.value;
      let nombreValor = nombre.value;
      let noEmpleadoValor = noEmpleado.value;
      let ubicacionValor = ubicacion.value;
      let noContactoValor = noContacto.value;
      let unidadDeNegocioValor = unidadDeNegocio.value;
      let marcaValor = marca.value;
      let modeloValor = modelo.value;
      let placaValor = placa.value;
      let dominioValor = dominio.value;
      let aditamentoValor = aditamento.value;
      let problemaRPCValor = problemaRPC.value;
      let repaldarValor = repaldar.value;
      let softwareAValor = softwareA.value;
      let condicionesFDEValor = condicionesFDE.value;
      let ingenieroNombreValor = ingenieroNombre.value;

      // SI Y NO
      let tieneSapValor = tieneSap.value;
      let oneDriveValor = oneDrive.value;
      let permisosDDValor = permisosDD.value;
      let impresoraPValor = impresoraP.value;
      let teamsValor = teams.value;
      let vpnValor = vpn.value;
      let permisosUSBValor = permisosUSB.value;
      let compartidosDRValor = compartidosDR.value;
      let pstValor = pst.value;
      let tipoLDOValor = tipoLDO.value;
      let cifradoDEValor = cifradoDE.value;
      let llavesPGPValor = llavesPGP.value;

      // FIRMAS
      let signatureIngenieroImagen = ingernieroFirma.toDataURL();
      let signatureCliente1Imagen = clienteFirma1.toDataURL();
      let signatureCliente2Imagen = clienteFirma2.toDataURL();

      if (signaturePadIngeniero.isEmpty() && ingenieroF === "") {
        // Si el lienzo esta vacio y El LOCAL STORAGE tambien
        signatureIngenieroImagen = "";
      } else if (signaturePadIngeniero.isEmpty() && ingenieroF !== "") {
        signatureIngenieroImagen = ingenieroF;
      }

      if (signaturePadCliente1.isEmpty() && cliente1F === "") {
        signatureCliente1Imagen = "";
      } else if (signaturePadCliente1.isEmpty() && cliente1F !== "") {
        signatureCliente1Imagen = cliente1F;
      }

      if (signaturePadCliente2.isEmpty() && cliente2F === "") {
        signatureCliente2Imagen = "";
      } else if (signaturePadCliente2.isEmpty() && cliente2F !== "") {
        signatureCliente2Imagen = cliente2F;
      }

      if (
        noInsidenteValor === "" ||
        fechaValor === "" ||
        noEmpleadoValor === "" ||
        noContactoValor === "" ||
        unidadDeNegocioValor === "" ||
        modeloValor === "" ||
        placaValor === "" ||
        aditamentoValor === "" ||
        problemaRPCValor === "" ||
        repaldarValor === "" ||
        softwareAValor === "" ||
        condicionesFDEValor === "" ||
        ingenieroNombreValor === "" ||
        tieneSapValor === "" ||
        oneDriveValor === "" ||
        permisosDDValor === "" ||
        impresoraPValor === "" ||
        teamsValor === "" ||
        vpnValor === "" ||
        permisosUSBValor === "" ||
        compartidosDRValor === "" ||
        pstValor === "" ||
        tipoLDOValor === "" ||
        cifradoDEValor === "" ||
        llavesPGPValor === "" ||
        ubicacionValor === "" ||
        marcaValor === "" ||
        dominioValor === ""
      ) {
        alert("¡NO DEJES CAMPOS SIN LLENAR!");
      } else {
        let cargar = JSON.parse(localStorage.getItem("MisDatos"));
        let guardar = cargar.map((cargar) =>
          cargar.nombre_archivo === nomArchivo
            ? {
                ...cargar,
                noInsidente: noInsidenteValor,
                fecha: fechaValor,
                nombre: nombreValor,
                noEmpleado: noEmpleadoValor,
                ubicacion: ubicacionValor,
                noContacto: noContactoValor,
                unidadDeNegocio: unidadDeNegocioValor,
                marca: marcaValor,
                modelo: modeloValor,
                placa: placaValor,
                dominio: dominioValor,
                aditamento: aditamentoValor,
                problemaRPC: problemaRPCValor,
                repaldar: repaldarValor,
                softwareA: softwareAValor,
                condicionesFDE: condicionesFDEValor,
                ingenieroNombre: ingenieroNombreValor,
                tieneSap: tieneSapValor,
                oneDrive: oneDriveValor,
                permisosDD: permisosDDValor,
                impresoraP: impresoraPValor,
                teams: teamsValor,
                vpn: vpnValor,
                permisosUSB: permisosUSBValor,
                compartidosDR: compartidosDRValor,
                pst: pstValor,
                tipoLDO: tipoLDOValor,
                cifradoDE: cifradoDEValor,
                llavesPGP: llavesPGPValor,
                ingernieroFirma: signatureIngenieroImagen,
                clienteFirma1: signatureCliente1Imagen,
                clienteFirma2: signatureCliente2Imagen,
              }
            : cargar
        );
        let guardarJSON = JSON.stringify(guardar);
        localStorage.setItem("MisDatos", guardarJSON);

        num++;
        if (num == 2) {
          alert("¡ LOS DATOS SE GUARDARON CORRECTAMENTE :) !");
        }
      }
    });

    /* GUARDAR
    -----------------------------------------------------------------------------
    ----------------------------------------------------------------------------- */
  });
};

// Creamos una promesa para cargar el PDF de Orden de Servicio
function cargarImagen(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function (e) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const res = event.target.result;
        resolve(res);
      };
      const file = this.response;
      reader.readAsDataURL(file);
    };
    xhr.send();
  });
}
