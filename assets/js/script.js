let tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
];

// Función para listar las tareas
function listarTareas() {
    let cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    for (let i = 0; i < tareas.length; i++) {
        let fila = document.createElement('tr');

        let celdaTarea = document.createElement('td');
        celdaTarea.textContent = tareas[i].tarea;

        let celdaFinalizar = document.createElement('td');
        let botonFinalizar = document.createElement('button');
        botonFinalizar.textContent = 'Finalizar';
        botonFinalizar.classList.add('btn', 'btn-danger');
        botonFinalizar.onclick = function () {

            eliminarTarea(i);

        };
        celdaFinalizar.appendChild(botonFinalizar);

        fila.appendChild(celdaTarea);
        fila.appendChild(celdaFinalizar);

        cuerpoTabla.appendChild(fila);
    }
}

function agregarTarea() {
    let formulario = document.getElementById('formulario');
    formulario.style.display = 'block';
}

function agregarNuevaTarea() {
    let nuevaTarea = document.getElementById('nuevaTarea').value;
    if (nuevaTarea.trim() !== '') {
        tareas.push({ tarea: nuevaTarea });
        listarTareas();
        document.getElementById('nuevaTarea').value = '';
        document.getElementById('formulario').style.display = 'none';
    }
}

function eliminarTarea(index) {
    let confirmar = confirm('¿Desea eliminar la tarea?')
    if (confirmar === true) {
        tareas.splice(index, 1);
        Swal.fire({
            title: "Todo correcto!",
            text: "Tarea eliminada.",
            icon: "success"
        });
        listarTareas();
    }
}

listarTareas();