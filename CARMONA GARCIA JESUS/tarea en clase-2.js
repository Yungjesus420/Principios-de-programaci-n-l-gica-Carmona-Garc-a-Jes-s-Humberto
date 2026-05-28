
let numeroDeProductos = 0;

let mensaje = numeroDeProductos === 0 ? "Alerta te quedaste sin productos" 
                : numeroDeProductos < 5 ? "Alerta te quedan pocos productos"
                : "Tienes suficientes productos"

console.log(mensaje)