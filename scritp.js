let listaDeCompras = [];

const agregarProducto = (producto) => {
    if(!listaDeCompras.includes(producto)){ // Comprobamos si el producto ya esta en la lista
        listaDeCompras.push(producto); //Si no esta, lo agregamos al final del array
        console.log(`${producto} ha sido agragado a la lista de compras.`);

    }else{
        console.log(`${producto} ya está en la lista`);
    }
};

const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto); // Encontramos el índice del producto en la lista
    if (indice !== -1) { //si el índice es distinto de -1, el producto está en la lista
        listaDeCompras.slice(indice, 1); //Wlimina el producto en el índice encontrado
        console.log(`${producto} ha sido eliminado de la lista.`);
    }else{
        console.log(`${producto} nos se encuentra en la lista.`);
    }
};

const mostrarLista = () => {
    if(listaDeCompras.length === 0){
        console.log("la lista de copras está vaciá.");
    }else {
        console.log("lista de compras:");
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index} + 1. ${producto}`);
        });
    }
};


//probar agregar productos

agregarProducto("leche");
agregarProducto("pan");
agregarProducto("Huevos");
agregarProducto("Leche"); // ESte no se agregara por que ya esta

//probar mostrar lista

mostrarLista();


//probar eliminar productos

eliminarProducto("pan");
eliminarProducto("arroz"); //producto no encontrado

//mostrar la lista despues de eliminar un producto

console.log(mostrarLista())


