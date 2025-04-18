  let codigo = "";
  let productosCargados =  null;
  let file = null;

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      codigo += event.key;
    } else {
      console.log(file);
      if (file){
        if(file.name.endsWith('.json')){
          console.log("hola soy json");

         buscarProductoJson(codigo);
        } else if (file.name.endsWith('.txt')){
          console.log("hola soy txt");

          buscarProductoTxt(codigo);
        
        } else if (file.name.endsWith('.csv')){
          console.log("hola soy csv");
        buscarProductoCsv(codigo);
        }
      codigo = "";
      }
    }
  });

  document.getElementById('fileInput').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      document.getElementById('file').textContent = `${file.name}`;
      document.getElementById('main-container').classList.remove('hidden');
      document.getElementById('fileInput-container').classList.add('hidden');
      
    }
    
});


  document.getElementById('fileInput').addEventListener('change', function () {
    const file = this.files[0];

    if (!file) return;

      const reader = new FileReader();

      reader.onload = function (event) {
      const contenido = event.target.result;

      if (file.name.endsWith('.json')) {
        try {
          productosCargados = JSON.parse(contenido);
          console.log("JSON cargado correctamente:", productosCargados);
        } catch (error) {
          alert("El archivo JSON es inválido.");
        }
      } 
      else if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        try {
          productosCargados = parseTXT(contenido); 
          console.log("TXT cargado correctamente:", productosCargados);
        } catch (error) {
          alert("El archivo txt es inválido.");
        }      
      } 
      else if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        try {
          productosCargados = parseCSV(contenido);
          console.log("CSV cargado correctamente:", productosCargados);
        } catch (error) {
          alert("El archivo CSV es inválido.");
        }        } 
      else {
        alert('Formato no soportado. Solo .json, .txt o .csv');
      }
    };

    reader.readAsText(file);
  });

  function parseTXT(txt, separator = "|") {
    return txt.trim().split("\n").map(line => {
      const [id, nombre, precio, imagen] = line.split(separator);
      return {
        id: Number(id),
        nombre,
        precio: Number(precio),
        imagen
      };
    });
  }
  

  
  function parseCSV(csv) {
    const lines = csv.trim().split("\n");
    const headers = lines[0].split(",");
    return lines.slice(1).map(line => {
      const values = line.split(",");
      return headers.reduce((obj, key, index) => {
        obj[key] = isNaN(values[index]) ? values[index] : Number(values[index]);
        return obj;
      }, {});
    });
  }
      
  
  function buscarProductoJson(codigo) {
  if (!productosCargados) return alert("Primero debes cargar un archivo JSON válido.");

  const id = parseInt(codigo);
  const idioma = document.getElementById("language").value;

  const productos = idioma === "es" ? productosCargados.spanishProducts : productosCargados.englishProducts;

  const producto = productos.find(p => p.id === id);

  const responseName = document.getElementById("responseName");
  const responsePrice = document.getElementById("responsePrice");
  const imagen = document.getElementById("imagen");

  if (producto) {
    if (idioma === "es") {
      responseName.innerHTML = ` ${producto.nombre}`;
      responsePrice.innerHTML = `Precio: $${producto.precio} MXN`;
    } else {
      responseName.innerHTML = `${producto.name}`;
      responsePrice.innerHTML = `Price: $${producto.price} MXN`;
    }

    imagen.src = `img/${producto.imagen || producto.img}`;
    imagen.alt = `Imagen de ${producto.nombre || producto.name}`;
  } else {
    responseName.innerHTML = "";
    responsePrice.innerHTML = idioma === "es" ? "Producto no encontrado" : "Product not found";
    imagen.src = "img/error.png";
    imagen.alt = "Producto no encontrado";
  }
}
  

function buscarProductoTxt(codigo) {
  if (!productosTxtEs || !productosTxtEn) return alert("Primero debes cargar un archivo TXT válido.");

  const id = parseInt(codigo);
  const idioma = document.getElementById("language").value;

  const productos = idioma === "es" ? productosTxtEs : productosTxtEn;
  const producto = productos.find(p => p.id === id);

  const responseName = document.getElementById("responseName");
  const responsePrice = document.getElementById("responsePrice");
  const imagen = document.getElementById("imagen");

  if (producto) {
    if (idioma === "es") {
      responseName.innerHTML = ` ${producto.nombre}`;
      responsePrice.innerHTML = `Precio: $${producto.precio} MXN`;
    } else {
      responseName.innerHTML = `${producto.name}`;
      responsePrice.innerHTML = `Price: $${producto.price} MXN`;
    }

    imagen.src = `img/${producto.imagen || producto.img}`;
    imagen.alt = `Imagen de ${producto.nombre || producto.name}`;
  } else {
    responseName.innerHTML = "";
    responsePrice.innerHTML = idioma === "es" ? "Producto no encontrado" : "Product not found";
    imagen.src = "img/error.png";
    imagen.alt = "Producto no encontrado";
  }
}

function buscarProductoCsv(codigo) {
  if (!productosCsvEs || !productosCsvEn) return alert("Primero debes cargar un archivo CSV válido.");

  const id = parseInt(codigo);
  const idioma = document.getElementById("language").value;

  const productos = idioma === "es" ? productosCsvEs : productosCsvEn;
  const producto = productos.find(p => p.id === id);

  const responseName = document.getElementById("responseName");
  const responsePrice = document.getElementById("responsePrice");
  const imagen = document.getElementById("imagen");

  if (producto) {
    if (idioma === "es") {
      responseName.innerHTML = ` ${producto.nombre}`;
      responsePrice.innerHTML = `Precio: $${producto.precio} MXN`;
    } else {
      responseName.innerHTML = `${producto.name}`;
      responsePrice.innerHTML = `Price: $${producto.price} MXN`;
    }

    imagen.src = `img/${producto.imagen || producto.img}`;
    imagen.alt = `Imagen de ${producto.nombre || producto.name}`;
  } else {
    responseName.innerHTML = "";
    responsePrice.innerHTML = idioma === "es" ? "Producto no encontrado" : "Product not found";
    imagen.src = "img/error.png";
    imagen.alt = "Producto no encontrado";
  }
}


  function changeLanguage() {
    const language = document.getElementById("language").value;
  
    if (language === "es") {
      document.getElementById("title").innerHTML = "Verificador de precios";
      document.getElementById("instruction").innerHTML = "Presiona el código del producto y luego Enter";
      document.getElementById("productTag").innerHTML = "Producto:";
      document.getElementById("fileName").innerHTML = "Archivo:";
    } else {
      document.getElementById("title").innerHTML = "Price Verifier";
      document.getElementById("instruction").innerHTML = "Press the product code and then Enter";
      document.getElementById("productTag").innerHTML = "Product:";
      document.getElementById("fileName").innerHTML = "File:";

    }
  
    // Limpiar 
    document.getElementById("responseName").innerHTML = "";
    document.getElementById("responsePrice").innerHTML = "";
    document.getElementById("imagen").src = "img/barcode.gif";
    document.getElementById("imagen").alt = "Código de barras";
  }
  
  function toggleTheme() {
    const body = document.body;
    const isDark = document.getElementById("toggleTheme").checked;
    const label = document.getElementById("themeLabel");
  
    if (isDark) {
      body.classList.add("dark-mode");
      label.textContent = "🌙";
    } else {
      body.classList.remove("dark-mode");
      label.textContent = "🌞";
    }
  }