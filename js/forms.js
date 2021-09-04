const form = document.querySelector('.form');
const opcionesDelProcessBar = document.querySelectorAll('.progressbar__option');

form.addEventListener('click', function(e) {
    let elemento = e.target;
    let btnContinuar = elemento.classList.contains('step__button--next');
    let btnRegresar = elemento.classList.contains('step__button--back');
    if (btnContinuar || btnRegresar) {
        let stepActual = document.getElementById('step-' + elemento.dataset.step);
        let proxStep = document.getElementById('step-' + elemento.dataset.to_step);
        stepActual.addEventListener('animationend', function callback() {
            stepActual.classList.remove('active');
            proxStep.classList.add('active');
            if (btnContinuar) {
                stepActual.classList.add('to-left');
                opcionesDelProcessBar[elemento.dataset.to_step - 1].classList.add('active');
            } else {
                proxStep.classList.remove('to-left');
                opcionesDelProcessBar[elemento.dataset.step - 1].classList.remove('active');
            }
            stepActual.removeEventListener('animationend', callback);
        });
        stepActual.classList.add('inactive');
        proxStep.classList.remove('inactive');
    }
});

const btnOpenModalFooter = document.getElementById("btnOpenModalFooter");
const btnOpenModalHeader = document.getElementById("btnOpenModalHeader");
const modalContainer = document.getElementById("modalContainer");
const cerrarModal = document.querySelector(".cerrarModal");

btnOpenModalFooter.addEventListener("click", ()=>{
    modalContainer.classList.add("open");
})
btnOpenModalHeader.addEventListener("click", ()=>{
    modalContainer.classList.add("open");
})

cerrarModal.addEventListener("click", ()=>{
    modalContainer.classList.remove("open");
})

const enviarDatos = document.getElementById("enviarDatos");
enviarDatos.addEventListener("click", ()=>{
    alert(`Gracias por elegirnos! Tus datos se han enviado con exito. En breve se comunicarán con usted.`);
    modalContainer.classList.remove("open");
})