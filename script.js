function generarPoster() {
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const categoria = document.getElementById("categoria").value;
  const imagenFile = document.getElementById("imagen").files[0];

  document.getElementById("previewNombre").innerText = nombre;
  document.getElementById("previewDescripcion").innerText = descripcion;
  document.getElementById("previewCategoria").innerText = "Categoría: " + categoria;

  if (imagenFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("previewImagen").src = e.target.result;

      html2canvas(document.getElementById("preview")).then(canvas => {
        const link = document.getElementById("downloadLink");
        link.href = canvas.toDataURL();
        link.classList.remove("hidden");
      });
    };
    reader.readAsDataURL(imagenFile);
  }
}

var s=document.createElement("script");s.src="https://html2canvas.hertzen.com/dist/html2canvas.min.js";document.body.appendChild(s);