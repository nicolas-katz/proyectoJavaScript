const
cont1 = document.getElementById("cont1"),
cont2 = document.getElementById("cont2"),
cont3 = document.getElementById("cont3"),
cont4 = document.getElementById("cont4");

const 
contadores = [cont1, cont2, cont3, cont4];

let 
cant1 = 0, 
cant2 = 0, 
cant3 = 0, 
cant4 = 0;

let cantidades = [cant1, cant2, cant3, cant4];

const tiem = 25;

let
fin1 = 25,
fin2 = 19,
fin3 = 40,
fin4 = 11;

let fin = [fin1, fin2, fin3, fin4];

for (let i = 0; i < contadores.length; i++) {

    const contador = contadores[i];

    let tiempo = setInterval(()=>{
        contador.innerText = cantidades[i]++;

        if (cantidades[i] === fin[i] + 1) {
            clearInterval(tiempo);
        }
    }, `${tiem}`)

}