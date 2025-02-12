
const productosJson = [
{id: 1, nombre: "Palomitas", precio: 23, imagen: "palomitas.png"},
{id: 2, nombre: "Refresco", precio: 18, imagen: "refresco.png"},
{id: 3, nombre: "Nachos", precio: 35, imagen: "nachos.png"},
{id: 4, nombre: "Hot Dog", precio: 30, imagen: "hotdog.png"},
{id: 5, nombre: "Pizza", precio: 50, imagen: "pizza.png"},
{id: 6, nombre: "Helado", precio: 25, imagen: "helado.png"},
{id: 7, nombre: "Chocolate", precio: 20, imagen: "chocolate.png"},
{id: 8, nombre: "Galletas", precio: 15, imagen: "galletas.png"},
{id: 9, nombre: "Papas Fritas", precio: 28, imagen: "papas.png"},
{id: 10, nombre: "Dulces", precio: 10, imagen: "dulces.png"}
];
    


let codigo = "";
document.addEventListener("keydown", (event) => {
    if (event.key != "Enter") {
        codigo += event.key;
        console.log(codigo);
    } else {
        buscarProducto(codigo);
        codigo = "";
    }
});

function buscarProducto(codigo) {
    document.getElementById("responseName").value = "";
    document.getElementById("responsePrice").value = "";
    const producto = productosJson.find((producto) => producto.id == codigo);
    if (producto) {

        document.getElementById("responseName").innerHTML = `Producto: ${producto.nombre} `;
        document.getElementById("responsePrice").innerHTML = `Precio: $${producto.precio}`;
        document.getElementById("imagen").src = `img/${producto.imagen}`;
        document.getElementById("imagen").alt = "Imagen de " + producto.nombre;
    } else {
        console.log(document.getElementById("response").value);
        document.getElementById("response").innerHTML = "Producto no encontrado";
        document.getElementById("imagen").src = "img/error.png";
        document.getElementById("imagen").alt = "Imagen de producto no encontrado";
    }
};


