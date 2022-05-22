// Eduardo Malbert
// Comisión 30995
// Profesor: Diego Jofre
//Desafío 01 - Manejo de Archivos en Javascript


class Usuario {

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName() {
        return this.nombre + ' ' + this.apellido;
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    };
    
    countMascotas(){
        return this.mascotas.length;
    };

    addBook(nombreLibro, autorLibro){
        this.libros.push(
            {
                "nombre": nombreLibro,"autor": autorLibro
            }
        );
    }

    getBookNames(){
        if (this.libros.length == 0) {
            console.log("No hay libros");
        } else {
            let nombres = this.libros.map(l => l.nombre);
            return nombres;
        }
    };
};


//Instancio el objeto User1 basado en la clase Usuario
let User1 = new Usuario ('Pepe', 'Argento');
//Agrego mascotas al objeto
User1.addMascota('Yuki');
User1.addMascota('Fishi');
User1.addMascota('Tasha');
User1.addMascota('Tuti.');
//Agrego libros al objeto
User1.addBook('Cementerio de Animales','Stephen King');
User1.addBook('El Club de las 5AM','Robin Sharma');
User1.addBook('Juego de Tronos','G.R.R. Martin');
//Muestro el nombre completo
console.log(User1.getFullName());
//Muestro la cantidad de mascotas
console.log(User1.countMascotas());
// Obtenemos todos los nombres de los libros
console.log(User1.getBookNames());
