  let codigo = "";
  let productosCargados =  null;
  let file = null;
  

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      codigo += event.key;
    } else {
      console.log(file);
      buscarProductoCSV(codigo);
      codigo = ""; // Reiniciar el código después de buscar
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

      if ( file.name.endsWith('.csv')) {
        try {
          productosCargados = parseCSV(contenido); 
          console.log("csv cargado correctamente:", productosCargados);
        } catch (error) {
          alert("El archivo csv es inválido.");
        }      
      } 
      
      else {
        alert('Formato no soportado. .csv');
      }
    };

    reader.readAsText(file);
  });




  function parseCSV(csvString, separator = ",") {
    const result = { Español: {}, English: {} };
    
    const lines = csvString.trim().split("\n");
  
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
  
      const [id, nombreEs, precioEs, imagenEs, nombreEn, precioEn, imagenEn] = line.split(separator);
  
      result["Español"][id] = {
        id: Number(id),
        nombre: nombreEs,
        precio: Number(precioEs),
        imagen: imagenEs
      };
  
      result["English"][id] = {
        id: Number(id),
        nombre: nombreEn,
        precio: Number(precioEn),
        imagen: imagenEn
      };
    }
  
    return result;
  }
  

  function buscarProductoCSV(codigo) {
    if (!productosCargados) {
      alert("Primero debes cargar un archivo CSV válido.");
      return;
    }
  
    const id = parseInt(codigo);
    const idioma = document.getElementById("toggleLanguage").checked ? "en" : "es";
    const langKey = idioma === "es" ? "Español" : "English";
    const productos = productosCargados[langKey];
  
    const producto = productos?.[id];
   
    const responseName = document.getElementById("responseName");
    const responsePrice = document.getElementById("responsePrice");
    const imagen = document.getElementById("imagen");
  
    if (producto) {
      responseName.innerHTML = producto.nombre;
      responsePrice.innerHTML = idioma === "es"
        ? `Precio: $${producto.precio} MXN`
        : `Price: $${producto.precio} MXN`;
  
      imagen.src = `img/${producto.imagen}`;
      imagen.alt = `Imagen de ${producto.nombre}`;
    } else {
      responseName.innerHTML = "";
      responsePrice.innerHTML = idioma === "es"
        ? "Producto no encontrado"
        : "Product not found";
      imagen.src = "img/error.png";
      imagen.alt = "Producto no encontrado";
    }
  }
  


  function toggleLanguage() {
    const isEnglish = document.getElementById("toggleLanguage").checked;
    const label = document.getElementById("languageLabel");
    const idioma = isEnglish ? "en" : "es";
  
    if (idioma === "es") {
      label.textContent = "ES";
      document.getElementById("title").innerHTML = "Verificador de precios";
      document.getElementById("fileInput-label").innerHTML = "Selecciona un archivo .csv";
      document.getElementById("instruction").innerHTML = "Presiona el código del producto y luego Enter";
      document.getElementById("productTag").innerHTML = "Producto:";
      document.getElementById("fileName").innerHTML = "Archivo:";
    } else {
      label.textContent = "EN";
      document.getElementById("title").innerHTML = "Price Verifier";
      document.getElementById("fileInput-label").innerHTML = "Select a .csv file";
      document.getElementById("instruction").innerHTML = "Press the product code and then Enter";
      document.getElementById("productTag").innerHTML = "Product:";
      document.getElementById("fileName").innerHTML = "File:";
    }
  
    // Limpiar resultados anteriores
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


  function currentHour() {
    const ahora = new Date().toLocaleTimeString('es-MX', {
      timeZone: 'America/Hermosillo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    console.log(ahora);
    document.getElementById("currentTime").innerHTML = ahora;
    
  }

  function currentDate() {
    const hoy = new Date().toLocaleDateString('es-MX', {
      timeZone: 'America/Hermosillo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    console.log(hoy);
    document.getElementById("currentDate").innerHTML = hoy;
  }

  document.addEventListener("DOMContentLoaded", () => {
    currentDate();
    currentHour();
    setInterval(currentHour, 1000); // actualiza la hora cada segundo
  });