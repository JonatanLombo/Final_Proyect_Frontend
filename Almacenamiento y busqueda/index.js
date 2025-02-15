var datos = []
var posicion_temporal = ""

function cargar_datos(){
    var extraer = localStorage.getItem("informacion_formulario")    
    if(extraer == null){
        datos = []
    }
    else{
    datos = JSON.parse(extraer)   
    }

    var lista = document.getElementById("lista_datos")
    lista.innerHTML = ""
    for (let a = 0; a < datos.length; a++) {
        lista.innerHTML = lista.innerHTML + `<tr>
                                                <td onclick="cargar_posicion(${a})">${datos[a].numero_documento}</td>
                                                <td onclick="cargar_posicion(${a})">${datos[a].nombres}</td>
                                                <td onclick="cargar_posicion(${a})">${datos[a].apellidos}</td>
                                                <td><button type="button" class="btn btn-danger" onclick="eliminar(${a})">Eliminar</button></td>
                                             </tr> `
        
    }
}

function guardar(){
    var nombres = document.getElementById("nombres").value
    var apellidos = document.getElementById("apellidos").value
    var tipo_documento = document.getElementById("tipo_documento").value
    var numero_documento = document.getElementById("numero_documento").value
    var edad = document.getElementById("edad").value
    var numero_telefono = document.getElementById("numero_telefono").value
    var ciudad_residencia = document.getElementById("ciudad_residencia").value
    var direccion = document.getElementById("direccion").value

    var posicion = datos.findIndex((item) => item.numero_documento == numero_documento)
    if(posicion == -1){
        datos.push({
            nombres:nombres, 
            apellidos:apellidos,
            tipo_documento:tipo_documento,
            numero_documento:numero_documento,
            edad:edad, 
            numero_telefono:numero_telefono,
            ciudad_residencia:ciudad_residencia,
            direccion:direccion
        })

        localStorage.setItem("informacion_formulario", JSON.stringify(datos))
        cargar_datos()
        
        Swal.fire({
            title: "Excelente",
            text: "Se guardo el registro exitosamente",
            icon: "success"
          });
        
    }
    else{
        Swal.fire({
            title: "Lo siento",
            text: "El registro corresponde con un documemto ya existe en el sistema",
            icon: "error"
          }); 
    }
}

function eliminar(posicion){
    datos.splice(posicion,1)
    localStorage.setItem("informacion_formulario", JSON.stringify(datos))
    cargar_datos()
    
    Swal.fire({
        title: "Excelente",
        text: "Se eliminaron los datos correctamente",
        icon: "success"
      }); 
}

function cargar_posicion(posicion){
    posicion_temporal = posicion
    document.getElementById("nombres").value = datos[posicion].nombres
    document.getElementById("apellidos").value = datos[posicion].apellidos
    document.getElementById("tipo_documento").value = datos[posicion].tipo_documento
    document.getElementById("numero_documento").value = datos[posicion].numero_documento
    document.getElementById("edad").value = datos[posicion].edad
    document.getElementById("numero_telefono").value = datos[posicion].numero_telefono
    document.getElementById("ciudad_residencia").value = datos[posicion].ciudad_residencia
    document.getElementById("direccion").value = datos[posicion].direccion
}

function actualizar(){
    var nombres = document.getElementById("nombres").value
    var apellidos = document.getElementById("apellidos").value
    var tipo_documento = document.getElementById("tipo_documento").value
    var numero_documento = document.getElementById("numero_documento").value
    var edad = document.getElementById("edad").value
    var numero_telefono = document.getElementById("numero_telefono").value
    var ciudad_residencia = document.getElementById("ciudad_residencia").value
    var direccion = document.getElementById("direccion").value
    datos[posicion_temporal].nombres = nombres
    datos[posicion_temporal].apellidos = apellidos
    datos[posicion_temporal].tipo_documento = tipo_documento
    datos[posicion_temporal].numero_documento = numero_documento
    datos[posicion_temporal].edad = edad
    datos[posicion_temporal].numero_telefono = numero_telefono
    datos[posicion_temporal].ciudad_residencia = ciudad_residencia
    datos[posicion_temporal].direccion = direccion
    localStorage.setItem("informacion_formulario", JSON.stringify(datos))
    cargar_datos()
    
    Swal.fire({
        title: "Excelente",
        text: "Se actualizaron los datos correctamente",
        icon: "success"
      }); 
}

function buscar(posicion){
    var buscar = document.getElementById("buscar").value

    if(buscar == datos[posicion].numero_documento){
        cargar_posicion()
        localStorage.setItem("informacion_formulario", JSON.stringify(datos))
        cargar_datos()
    } else{
        Swal.fire({
            title: "Lo siento",
            text: "No se encontró información del usuario",
            icon: "error"
          }); 
    }
}

function limpiar(){
    posicion_temporal = ""
    localStorage.setItem("informacion_formulario", JSON.stringify(datos))
    cargar_datos()
}

cargar_datos()