// Accedemos a los elementos HTML
const texto = document.querySelector("#nomFormulario");
const boton1 = document.querySelector("#agregarFormulario");
const lista = document.querySelector("ul");
const mensage1 = document.querySelector("#mensaje1");

/* BOTON PARA AGRAGAR UNA CAJA
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
if (boton1) {
  // Verificamos que exista
  boton1.addEventListener("click", (e) => {
    // Ayuda a que no se refresque la pagina cada que damos click
    e.preventDefault();

    // Variables para los valores de la lista
    const valorTexto = texto.value;
    const valorLista = document.createElement("li");
    const valormensage = document.createElement("p");

    // Condicional para que el usurio no ponga un texto en blanco
    if (valorTexto !== "") {
      // SI EXISTE ALGO EN EL LOCAL STORAGE
      if (localStorage.getItem("MisDatos")) {
        // CREAMOS LOS OBJETOS EN EL LOCAL STORAGE <-----------------------------------------
        let myData = JSON.parse(localStorage.getItem("MisDatos")); // Accedemos a los valores de LOCAL STROGE como objeto

        // VERIFICAMOS SI NO EXITE UN DATO REPETIDO EN LA LISTA DEL LOCAL STORAGE
        let existe = myData.some((myData) => {
          return myData.nombre_archivo === valorTexto;
        });

        if (existe) {
          // TRUE - Si existe
          alert("¡Este nombre ya esta usado, intenta otro!");
          // Quitamos el texto del input
          texto.value = "";
        } else {
          // FALSE - No existe
          let objeto = {
            // Creamos el objeto
            nombre_archivo: valorTexto,
            noInsidente: "",
            fecha: "",
            nombre: "",
            noEmpleado: "",
            ubicacion: "",
            noContacto: "",
            unidadDeNegocio: "",
            marca: "",
            modelo: "",
            placa: "",
            dominio: "",
            aditamento: "",
            problemaRPC: "",
            repaldar: "",
            tieneSap: "",
            oneDrive: "",
            permisosDD: "",
            impresoraP: "",
            teams: "",
            vpn: "",
            permisosUSB: "",
            compartidosDR: "",
            pst: "",
            tipoLDO: "",
            cifradoDE: "",
            llavesPGP: "",
            softwareA: "",
            condicionesFDE: "",
            ingernieroFirma: "",
            ingenieroNombre: "",
            clienteFirma1: "",
            clienteFirma2: "",
          };
          myData.push(objeto); // Lo agregamos al arreglo
          let myDataJSON = JSON.stringify(myData); // Lo convertimos en JSON
          localStorage.setItem("MisDatos", myDataJSON); // Lo agregamos al LOCAL STORAGE
          // TERMINAMOS DE GUARDAR LOS DATOS EN EL LOCAL STORAGE

          // Cambiando valores al texto
          valormensage.textContent = valorTexto;

          // Creando la lista
          valorLista.appendChild(valormensage); // Mensaje de la lista
          lista.appendChild(valorLista); // Caja de lista
          valorLista.appendChild(editar()); // Boton de editar
          valorLista.appendChild(eliminar()); // Boton de eliminar

          // Quitamos el texto del input
          texto.value = "";

          // Quitamos el mensaje
          mensage1.style.display = "none";
        }
      } else {
        // SI NO EXISTE ALGO EN EL LOCAL STORAGE <-----------------------------------------
        // CREAMOS LOS OBJETOS EN EL LOCAL STORAGE
        let myData = [];

        let objeto = {
          nombre_archivo: valorTexto,
          noInsidente: "",
          fecha: "",
          nombre: "",
          noEmpleado: "",
          ubicacion: "TAPB",
          noContacto: "",
          unidadDeNegocio: "",
          marca: "Dell",
          modelo: "",
          placa: "",
          dominio: "Azteca",
          aditamento: "",
          problemaRPC: "",
          repaldar: "",
          tieneSap: "tieneSap_si",
          oneDrive: "oneDrive_si",
          permisosDD: "permisosDD_si",
          impresoraP: "impresoraP_si",
          teams: "teams_si",
          vpn: "global",
          permisosUSB: "permisosUSB_si",
          compartidosDR: "compartidosDR_si",
          pst: "win",
          tipoLDO: "e1",
          cifradoDE: "cifradoDE_si",
          llavesPGP: "llavesPGP_si",
          softwareA: "",
          condicionesFDE: "",
          ingernieroFirma: "",
          ingenieroNombre: "",
          clienteFirma1: "",
          clienteFirma2: "",
        };
        myData.push(objeto);
        let myDataJSON = JSON.stringify(myData);
        localStorage.setItem("MisDatos", myDataJSON);

        // Cambiando valores al texto
        valormensage.textContent = valorTexto;

        // Creando la lista
        valorLista.appendChild(valormensage); // Mensaje de la lista
        lista.appendChild(valorLista); // Caja de lista
        valorLista.appendChild(editar()); // Boton de editar
        valorLista.appendChild(eliminar()); // Boton de eliminar

        // Quitamos el texto del input
        texto.value = "";

        // Quitamos el mensaje
        mensage1.style.display = "none";
      }
    }
  });
}
/* BOTON PARA AGRAGAR UNA CAJA
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* BOTON PARA EDITAR 📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤📤
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const editar = () => {
  const valorTexto_editar = texto.value;
  const botonEditar = document.createElement("button"); // Crea un boton
  botonEditar.textContent = "EDITAR"; // Agregamos texto al boton

  // Le agregamos una clase y id al boton
  botonEditar.className = "botonEditar";
  botonEditar.setAttribute("id", valorTexto_editar);

  // Damos funcion al boton editar
  botonEditar.addEventListener("click", (e) => {
    /*let evento = new CustomEvent("botonPresionado", {
      detail: valorTexto_editar,
    });*/
    //document.dispatchEvent(evento);
    obj = {
      nom: valorTexto_editar,
    };
    objJSON = JSON.stringify(obj);
    localStorage.setItem("enviarDato", objJSON);
    // Redireccionamos a la pagina del formulario
    window.open("formulario.html", "_self");
  });
  return botonEditar;
};
/* BOTON PARA EDITAR
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* BOTON PARA ELIMINAR
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const eliminar = () => {
  const valorTexto = texto.value;
  const botonEliminar = document.createElement("button"); // Crea un boton

  botonEliminar.textContent = "X"; // Le agrega una "X" de texto
  botonEliminar.className = "botonEliminar"; // Le agrega una clase
  botonEliminar.setAttribute("id", valorTexto + "_Eliminar"); // Le agregamos una id

  // Damos funcion al boton eliminar
  botonEliminar.addEventListener("click", (e) => {
    const item = e.target.parentElement;

    // Crearmos una alerta para verificar si quiere eliminar el item
    const opcion = confirm(
      `¿Estas seguro que quieres ELIMINAR el formulario ${valorTexto}?`
    );

    if (opcion == true) {
      lista.removeChild(item); // Eliminamos el item de la lista

      // ELIMINAMOS VALORES DEL LOCAL STORAGE
      let myData = JSON.parse(localStorage.getItem("MisDatos")); // Accedemos al valor del LOCAL STORAGE como objeto
      let myData2 = myData.filter(
        (myData) => myData.nombre_archivo !== valorTexto // Filtramos todos los valores y los guardamo, menos en el que estemos por eliminar
      );
      let myDataJSON_2 = JSON.stringify(myData2); // Lo convertimos en JSON
      localStorage.setItem("MisDatos", myDataJSON_2); // Lo agrego al LOCAL STORAGE
    }

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      mensage1.style.display = "block";
    }
  });
  return botonEliminar;
};
/* BOTON PARA ELIMINAR
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* MODO ACTUAL -> Esta funcion sirve para que los valores no se pierdan -🚩🚩🚩🚩🚩🚩🚩🚩🚩
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  let ver = JSON.parse(localStorage.getItem("MisDatos")); // Variable para realizar la segunda verificacion

  // Verificamos si exite algo en el LOCAL STORAGE
  if (localStorage.getItem("MisDatos")) {
    // Si el LOCAL STORAGE tiene una lista vacia
    if (ver.length === 0) {
      console.log("La lista del LOCAL STORAGE esta vacia");
    } else {
      // En caso de que si tenga valores
      // Quitamos el mensaje
      if (mensage1) {
        // Verificamos que exista
        mensage1.style.display = "none";
      }
      let myData = JSON.parse(localStorage.getItem("MisDatos")); // Accedemos al valor del LOCAL STORAGE como objeto

      // CREAREMOS LOS RECUADROS QUE YA EXISTEN EN EL LOCAL STORAGE
      // Variables para los valores de la lista
      myData.forEach((i) => {
        const valorTexto = i.nombre_archivo; // Nombre del archivo
        const valorLista = document.createElement("li");
        const valormensage = document.createElement("p");

        // Cambiando valores al texto
        valormensage.textContent = valorTexto;

        // Creando la lista
        valorLista.appendChild(valormensage); // Mensaje de la lista
        if (lista) {
          // Verificamos que exista
          lista.appendChild(valorLista); // Caja de lista
        }
        valorLista.appendChild(editar_2(valorTexto)); // Boton de editar
        valorLista.appendChild(eliminar_2(valorTexto)); // Boton de eliminar
      });
    }
  } else {
    // Si no existe nada
    return 0;
  }
});
/* MODO ACTUAL
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* BOTON PARA ELIMINAR 2 -> Esta funcion sirve para que los valores no se pierdan -🚩🚩🚩🚩🚩🚩🚩🚩🚩
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const eliminar_2 = (valorTexto) => {
  const botonEliminar = document.createElement("button"); // Crea un boton

  botonEliminar.textContent = "X"; // Le agrega una "X" de texto
  botonEliminar.className = "botonEliminar"; // Le agrega una clase
  botonEliminar.setAttribute("id", valorTexto + "_Eliminar"); // Le agregamos una id

  // Damos funcion al boton eliminar
  botonEliminar.addEventListener("click", (e) => {
    const item = e.target.parentElement;

    // Crearmos una alerta para verificar si quiere eliminar el item
    const opcion = confirm(
      `¿Estas seguro que quieres ELIMINAR el formulario ${valorTexto}?`
    );

    if (opcion == true) {
      lista.removeChild(item); // Eliminamos el item de la lista

      // ELIMINAMOS VALORES DEL LOCAL STORAGE
      let myData = JSON.parse(localStorage.getItem("MisDatos")); // Accedemos al valor del LOCAL STORAGE como objeto
      let myData2 = myData.filter(
        (myData) => myData.nombre_archivo !== valorTexto // Filtramos todos los valores y los guardamo, menos en el que estemos por eliminar
      );
      let myDataJSON_2 = JSON.stringify(myData2); // Lo convertimos en JSON
      localStorage.setItem("MisDatos", myDataJSON_2); // Lo agrego al LOCAL STORAGE
    }

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      mensage1.style.display = "block";
    }
  });
  return botonEliminar;
};
/* BOTON PARA ELIMINAR
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* BOTON PARA EDITAR -> Esta funcion sirve para que los valores no se pierdan -🚩🚩🚩🚩🚩🚩🚩🚩🚩
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const editar_2 = (valorTexto) => {
  const botonEditar = document.createElement("button"); // Crea un boton
  botonEditar.textContent = "EDITAR"; // Agregamos texto al boton

  // Le agregamos una clase y id al boton
  botonEditar.className = "botonEditar";
  botonEditar.setAttribute("id", valorTexto);

  // Damos funcion al boton editar
  botonEditar.addEventListener("click", (e) => {
    obj = {
      nom: valorTexto,
    };
    objJSON = JSON.stringify(obj);
    localStorage.setItem("enviarDato", objJSON);
    // Redireccionamos a la pagina del formulario
    window.open("formulario.html", "_self");
  });
  return botonEditar;
};
/* BOTON PARA EDITAR
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
