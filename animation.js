const panels = document.querySelectorAll('.panel')

//Funcion para activar la clase open.
function toggleOpen(){
    this.classList.toggle('open'); /*.toggle(open) Si esta la clase, la saca, y si no esta la clase la agrega. */
    
} 

function toggleWords(e){
 console.log(e.propertyName)
if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active')
}}
panels.forEach(element => element.addEventListener('click', toggleOpen)); //Activamos la function, cuando se le da un click.
panels.forEach(element => element.addEventListener('transitionend', toggleWords));
console.log(panels)