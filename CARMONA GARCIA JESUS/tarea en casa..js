
import promptSync from 'prompt-sync'; 
import fs from 'node:fs'; 
const prompt = promptSync(); 
const archivo = './inventario.json'; 

let inventario = { producto1: {}, producto2: {}, producto3: {} };

if (fs.existsSync(archivo)) {
    const datos = fs.readFileSync(archivo, 'utf-8'); 
    inventario = JSON.parse(datos); 
}

if (!fs.existsSync(archivo)) { 
    console.log( "== SISTEMA BASICO DE INVENTARIO ==\n" );
    console.log( "No se encontró un archivo de inventario existente. Por favor, ingrese los datos de los productos.\n" );

const producto1 = {
    nombre: prompt( "Ingrese el nombre del primer producto: " ),
    precio: parseFloat(prompt( "Ingrese el precio unitario: " )),
    cantidad: parseInt(prompt( "Ingrese la cantidad en stock: " ))
};

const producto2 = {
    nombre: prompt( "Ingrese el nombre del segundo producto: " ),
    precio: parseFloat(prompt( "Ingrese el precio unitario: " )),
    cantidad: parseInt(prompt( "Ingrese la cantidad en stock: " ))
};

 const producto3 = {
    nombre: prompt( "Ingrese el nombre del tercer producto: " ),
    precio: parseFloat(prompt( "Ingrese el precio unitario: " )),
    cantidad: parseInt(prompt( "Ingrese la cantidad en stock: " ))
};

fs.writeFileSync(archivo, JSON.stringify({ producto1, producto2, producto3 }, null, 2)); 
inventario = { producto1, producto2, producto3 }; 
}

console.clear(); 

console.log( "== SISTEMA BASICO DE INVENTARIO ==\n" );
console.log( `Producto registrado: ${inventario.producto1.nombre}` );
console.log( `Precio unitario: $${inventario.producto1.precio}` );
console.log( `Unidades disponibles: ${inventario.producto1.cantidad}` );
console.log( `Valor total del inventario: $${inventario.producto1.precio * inventario.producto1.cantidad}\n\n` );
console.log( `Producto registrado: ${inventario.producto2.nombre}` );
console.log( `Precio unitario: $${inventario.producto2.precio}` );
console.log( `Unidades disponibles: ${inventario.producto2.cantidad}` );
console.log( `Valor total del inventario: $${inventario.producto2.precio * inventario.producto2.cantidad}\n\n` );
console.log( `Producto registrado: ${inventario.producto3.nombre}` );
console.log( `Precio unitario: $${inventario.producto3.precio}` );
console.log( `Unidades disponibles: ${inventario.producto3.cantidad}` );
console.log( `Valor total del inventario: $${inventario.producto3.precio * inventario.producto3.cantidad}\n\n` );
console.log( `Valor total de los productos en inventario: $${(inventario.producto1.precio * inventario.producto1.cantidad) + (inventario.producto2.precio * inventario.producto2.cantidad) + (inventario.producto3.precio * inventario.producto3.cantidad)}\n\n` );
console.log( "== FIN DEL SISTEMA DE INVENTARIO ==" );
