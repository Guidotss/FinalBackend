const divImagen = document.getElementById("imagen");
const img = document.createElement("img");
const btnPerfil = document.getElementById("btn-imagen"); 
const dropDown = document.getElementById("drop-down");
const btnCerrarBrop = document.getElementById("cerrarDrop");


img.src = "../images/usuarioDefault.png"; 
img.id = "img-usuario"; 

divImagen.appendChild(img);


const mostrarDropDown = (dropDown) => {
    btnPerfil.addEventListener("click", () => {
        dropDown.style.display = "block";
    });
};

const cerrarDropDown = (dropDown) => {
    btnCerrarBrop.addEventListener("click", () => {
        dropDown.style.display = "none";
    });
}; 

mostrarDropDown(dropDown); 
cerrarDropDown(dropDown);



