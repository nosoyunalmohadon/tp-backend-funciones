//1)Crear una función que reciba dos parámetros y retorne un valor.
function sumar (num1, num2){
    return num1+num2
}
//2) Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el lado del cuadrado, calcule el área y la retorne.

function calcularAreaCuadrado (lado){
    return lado*lado
}

//3) Crear una función por declaración, puede hacer lo que quieras
function restar (num1, num2){
    return num1-num2
}

//4 4) Crear una función lambda por expresión que se llame autosuma, recibe un parámetro

const autosuma = function (numeros){
    let suma = 0
    numeros.forEach(function(element){
        suma = suma+element
    })
    return suma
}


// 5) Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- año

const cumple = (nombre, anio) => {
    return `Hola ${nombre} este año tenes o cumplís ${new Date().getFullYear() - anio}`
}

//6) crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y un nombre, que agregue al alumno en la ultima posición del array.
const inscribirAlumno = (alumnos, nombre) => alumnos.push(nombre)
let alumnos = new Array ("Pedro", "Manuel")
inscribirAlumno(alumnos, "Jose")
console.log(alumnos)

// Crear una función que se llame buscador, que reciba un array con nombres de alumnos y un nobre a buscar, y diga si encuentra el nombre en la lista.

const buscador = (alumnos, nombre) => {
    let existeAlumno=false
    alumnos.forEach(function(element){
        if(element == nombre){existeAlumno = true}
    })
    return existeAlumno
}
console.log(buscador(alumnos, "Pepe"))