
let x = 10;
let y = 20;

// pasar el valor "x" a "y" y viceversa.
let z = x;
x = y;
y = z;

/**
 *  Desestructuración 
 * 
 *  La desestructuración en JavaScript es una característica 
 *  que te permite extraer datos de arrays y objetos 
 *  de manera más conveniente y legible, 
 *  asignándolos a variables individuales.  
 */

// Desestructuración de arrays
let a = 5;
let b = 15;
[a, b ] = [ b, a ];


//====================================================
const lastName = ["Islas", "Pardo", "Elizondo", "Gavia"];

const [giss,    , eric] = lastName;
console.log( giss ); // Islas
console.log( eric ); // Pardo

// Desestructuración de objetos
const datosMiguel = {
    name: "Miguel",
    lastName: "González",
    age: 20
}

const { age , lastName : apellido } = datosMiguel;

console.log("edad: " + age );
console.log("apellido: " + apellido );

// Ejercicio
const product = {
    name: "Jabón Zote",
    precio: {
        frontera: 10,
        zonaCentro: 20 
    },
    color: "blanco"
}

// Obtener el color del jabón zote, que se llame la variable "tipo"
const {color : tipo } = product;
console.log("Color del jabon: " + tipo );

// Obtener el precio de zonaCentro

console.log(product.precio.zonaCentro); // Sin desestructurar

const { precio } = product;
console.log("El precio del jabón en zona centro es: " + precio.zonaCentro );

// Desestructurar un objeto, dentro de otro objeto
const { precio: { zonaCentro:precioComun  }  } = product;
console.log("Precio Común del Zote: " + precioComun);