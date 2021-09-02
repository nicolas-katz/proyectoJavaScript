// const btnEnviar = document.getElementById("enviar");
// const inputName = document.getElementById("name");
// const inputEmail = document.getElementById("email");
// const textarea = document.getElementById("consulta");

// usuarioStorage = localStorage.getItem("usuario");
// function funcionStorage(){
//     if (!usuarioStorage) {
//         btnEnviar.addEventListener("click", function(){
//             datosParaStorage = [{nombre: inputName.value, email: inputEmail.value}];
//             localStorage.setItem("usuario", JSON.stringify(datosParaStorage));
//         })
//     } else {
//         class Form {
//             constructor (nombre, email, mensaje) {
//                 this.nombre = nombre;
//                 this.email = email;
//                 this.mensaje = mensaje;
//             }
//         } 
//         usuario = new Form (inputName.value, inputEmail.value);
        
        
//         function guardarStorage(usuario) {
        
//             usuarioStorage = localStorage.getItem("usuario");
//             if(!usuarioStorage){
//                 datosForm.push(usuario);
//                 localStorage.setItem("usuario", JSON.stringify(datosForm));
//             } else {
//                 datosForm = JSON.parse(usuarioStorage);
//             }
            
//         }
        
//         let datosForm = [];
        
//         function imprimirValoresDelStorage(){
        
//             inputName.value = datosForm[0].nombre;
//             inputEmail.value = datosForm[0].email;
        
//         }
        
//         guardarStorage(usuario);
//         imprimirValoresDelStorage();
    
//     }
    
// }

// if (usuarioStorage) {
//     let nombreRegistrado = JSON.parse(usuarioStorage)[0].nombre;
//     let emailRegistrado = JSON.parse(usuarioStorage)[0].email;
        
//     if (((nombreRegistrado.length || emailRegistrado.length) == 0)) {
//         localStorage.removeItem("usuario");
//     }
// }

// funcionStorage();

// const mensaje = document.querySelector(".mensajeDeEnvio");
// btnEnviar.addEventListener("click", ()=>{

//     if((inputName.value.length > 0) && (inputEmail.value.length > 0) && (textarea.value.length > 0)) {
//         mensaje.innerText = "Se ha enviado correctamente";
//     }
// })

// const form = document.querySelector(".contactame-form form");
// mensaje.addEventListener("mouseover", ()=>{
//     form.removeChild(mensaje);
// })