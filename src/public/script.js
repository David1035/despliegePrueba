// Agregar o modificar cliente
document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const clienteData = {
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        documento: document.getElementById('documento').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value
    };

    fetch('http://localhost:5000/api/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clienteData)
    })
    .then(response => response.json())
    .then(data => alert(`Cliente guardado con éxito, ID: ${data._id}`))
    .catch(error => console.error('Error:', error));
});

// Consultar cliente por ID
document.getElementById('consultarForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('idConsultar').value;

    fetch(`http://localhost:5000/api/clientes/${id}`)
        .then(response => response.json())
        .then(data => {
            const resultadoDiv = document.getElementById('resultadoConsulta');
            if (data) {
                resultadoDiv.innerHTML = `
                    <p>ID: ${data._id}</p>
                    <p>Nombres: ${data.nombres}</p>
                    <p>Apellidos: ${data.apellidos}</p>
                    <p>Documento: ${data.documento}</p>
                    <p>Correo: ${data.correo}</p>
                    <p>Teléfono: ${data.telefono}</p>
                    <p>Dirección: ${data.direccion}</p>
                `;
            } else {
                resultadoDiv.innerHTML = '<p>Cliente no encontrado</p>';
            }
        })
        .catch(error => console.error('Error:', error));
});

// Consultar todos los clientes
document.getElementById('consultarTodos').addEventListener('click', function() {
    fetch('http://localhost:5000/api/clientes')
        .then(response => response.json())
        .then(data => {
            const resultadoDiv = document.getElementById('resultadoTodos');
            resultadoDiv.innerHTML = '';
            data.forEach(cliente => {
                resultadoDiv.innerHTML += `
                    <p>ID: ${cliente._id}</p>
                    <p>Nombres: ${cliente.nombres}</p>
                    <p>Apellidos: ${cliente.apellidos}</p>
                    <p>Documento: ${cliente.documento}</p>
                    <p>Correo: ${cliente.correo}</p>
                    <p>Teléfono: ${cliente.telefono}</p>
                    <p>Dirección: ${cliente.direccion}</p>
                    <hr>
                `;
            });
        })
        .catch(error => console.error('Error:', error));
});

// Eliminar cliente por ID
document.getElementById('eliminarForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('idEliminar').value;

    fetch(`http://localhost:5000/api/clientes/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => alert(`Cliente eliminado con éxito, ID: ${id}`))
    .catch(error => console.error('Error:', error));
});
