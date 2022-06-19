 //lightbox--> se abre la foto que aprieto
 const imagenes = document.querySelectorAll('.img-galeria')
 const imagenesLight = document.querySelector('.agregar-imagen')
 const contenedorLight = document.querySelector('.imagen-light')
 const menu1 = document.querySelector('.menu');

imagenes.forEach(imagen=>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
    
})

contenedorLight.addEventListener('click',(e)=>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menu1.style.opacity= '1'
    }    
})

//guarda en imagenesLight.src la source de la imagen que aprieto
const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu1.style.opacity= '0'
}