let btn = document.querySelector(".menu__logo");
let list = document.querySelector(".lists");
let body = document.querySelector(".max__container");
let op = document.querySelectorAll(".list");

function menu(){
    btn.addEventListener("click", ()=>{
        list.style.display = "flex";
        body.style.display = "block";
        setTimeout(()=>{list.style.transform = "translate(-100%)"}, 1);
    })
    
    op.forEach((op)=>{
        op.addEventListener("click", ()=>{
            list.style.transform = "translate(100%)"
            setTimeout(()=>{
                list.style.display = "none";
                body.style.display = "none";
            }, 400);

        })
    })
}

if(window.screen.width <= 425){
    menu();
}