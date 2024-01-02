let ham = document.querySelector(".menu__ham");
let menu = document.querySelector(".menu__lists");
const elemento = document.querySelectorAll('.title');
let contador = 1;



/*abrir el menu*/
if(window.screen.width <= "431"){
    function menuOpen(){
        ham.addEventListener("click", ()=>{
            menu.style.transform = "translateX(0)";
            ham.addEventListener("click", ()=>{
                menu.style.transform = "translateX(100%)";
                menuOpen();
            })
        })
    };
    menuOpen();
}

/*girar en los titulos*/
setInterval(()=>{
    contador++
    if(contador == 5){
        contador = 1;
    };
    elemento.forEach((title, index)=>{
        title.classList.remove(`animacion4`);    
        title.classList.remove(`animacion${contador - 1}`);    
        title.classList.add(`animacion${contador}`);
    })
},1500);


function copiarTexto(texto) {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    alert("Texto copiado al portapapeles: " + texto);
}


/*mover el menu de lenguajes*/

let l1 = document.querySelector(".l1");
let l2 = document.querySelector(".l2");
let l3 = document.querySelector(".l3");
let text_HTML = document.querySelector(".texto_HTML");
let text_CSS = document.querySelector(".texto_CSS");
let text_JS = document.querySelector(".texto_JS");
let movedor = document.querySelector(".select");
let nombres = document.querySelector(".nombres");
let valor_leng = 1;

nombres.addEventListener("click", (e)=>{
    e.stopPropagation();
    valor_leng  = e.target.closest('li').value;
    console.log(valor_leng); // sirve el .closest() para poder sellecionar solo un tipo de elemento, es este caso solo el li auqnue tenga elementos internos
    cambio_texto();
})
cambio_texto();

function cambio_texto(){
    switch (valor_leng) {
        case 1: 
            text_HTML.style.display = "block";
            text_CSS.style.display = "none";
            text_JS.style.display = "none";
            break;
        case 2: 
            text_HTML.style.display = "none";
            text_CSS.style.display = "block";
            text_JS.style.display = "none";           
            break;
        case 3: 
            text_HTML.style.display = "none";
            text_CSS.style.display = "none";
            text_JS.style.display = "block";
            break;
        default:
            break;
    }
}

if(window.screen.width <= "768"){
l1.addEventListener("click", (e)=>{
    movedor.style.transform = "translateY(-290%)";
})

l2.addEventListener("click", (e)=>{
    movedor.style.transform = "translateY(-190%)";
})

l3.addEventListener("click", (e)=>{
    movedor.style.transform = "translateY(-85%)";
})
}

if(window.screen.width > "768"){

    l1.addEventListener("click", (e)=>{
        movedor.style.transform = "translateY(-50%)";
    })
    
    l2.addEventListener("click", (e)=>{
        movedor.style.transform = "translateY(100%)";
    })
    
    l3.addEventListener("click", (e)=>{
        movedor.style.transform = "translateY(250%)";
    })

}

/*carrusel*/

let boton_izq = document.querySelector(".row_left");
let boton_der = document.querySelector(".row_right");
let carrusel = document.querySelector(".content");
let index = 1;

boton_der.addEventListener("click", ()=>{
    if (index == 3){
        index = 1;
    }else{
        index++;
    }
    console.log(index);
    changeData();
});

boton_izq.addEventListener("click", ()=>{
    if (index == 1){
        index = 3;
    }else{
        index--;
    }
    console.log(index);
    changeData();
});

function changeData(){
    switch (index) {
        case 1: 
            carrusel.style.transform = "translate(0%)";
            break;
        case 2: 
            carrusel.style.transform = "translate(-33.33%)";            
            break;
        case 3: 
            carrusel.style.transform = "translate(-66.66%)";            
            break;
        default:
            break;
    }
}

/*idioma*/ 

let banderas = document.querySelector(".banderas_container");
let textos_a_cambiar = document.querySelectorAll("[data-section]");

const cambiar_idioma = async idioma =>{
    let requestJason = await fetch(`./lenguajes/${idioma}.json`);
    let texts = await requestJason.json();
    console.log(texts);

    for ( let texto_a_cambiar of textos_a_cambiar) { // diferenciar texto de textos

        let section = texto_a_cambiar.dataset.section;
        let value = texto_a_cambiar.dataset.value;
    
        texto_a_cambiar.innerHTML = texts[section][value]
    
        console.log(section, value);
    }
}

banderas.addEventListener("click", (e)=>{
    cambiar_idioma(e.target.dataset.lenguaje);
})

window.addEventListener("load", (e)=>{
    cambiar_idioma("es");
})



