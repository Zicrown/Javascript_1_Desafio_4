let nombreMedicina = [];
let precioMedicina = [];
let nombre;
let precio;
let registrado;
let indRegistrado;
let cambioPrecio;


do {
    do {
        nombre = prompt("Indique el nombre del medicamento a registrar");
    } while (nombre==null || nombre=="");
    nombre = nombre.toUpperCase();
    // Verificando que existe el medicamento
    registrado = nombreMedicina.includes(nombre);
    if (registrado) {
        // Obteniendo el Indice del medicamento encontrado
        indRegistrado = nombreMedicina.indexOf(nombre);
        // Mostrando el precio del Medicamento encontrado
        alert(`El medicamento ${nombre} ya existe y su precio es ${precioMedicina[indRegistrado]}`);
        // Cambiando el precio del medicamento encontrado
        cambioPrecio = confirm(`Desea cambiar el Precio de ${nombreMedicina[indRegistrado]}?`);
        if (cambioPrecio) {
            do {
                precio = parseFloat(prompt(`Indique el nuevo precio del medicamento ${nombreMedicina[indRegistrado]}`));
            } while (isNaN(precio) || precio<=0);
            precioMedicina[indRegistrado] = precio;
        }
    } else {
        do {
            precio = parseFloat(prompt(`Indique el Precio del Medicamento ${nombre}`));
        } while (isNaN(precio) || precio<=0);
        // Agregando el nombre y precio del medicamento a sus arreglos respectivos
        nombreMedicina.push(nombre);
        precioMedicina.push(precio);
    }


} while ((confirm("Desea registrar otro medicamento?")));

// Mostrando la Lista de los medicamentos Registrados
for (let i = 0; i < nombreMedicina.length; i++) {
    console.log(`Nombre del Medicamento: ${nombreMedicina[i]}, Precio: ${precioMedicina[i]}`)

}
