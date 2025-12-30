let btn = document.querySelectorAll("button")
let input = document.querySelector("input")
let clear = document.querySelector("#clear")
let Bbtn = document.querySelector("#Back")
let equal = document.querySelector("#equal")
let ope = document.querySelectorAll(".operator")
let No = document.querySelector("#No")

input.value = "";

btn.forEach(choose =>{
    if(choose.id != "clear" && choose.id != "Back" && choose.id != "equal" && !choose.classList.contains("operator") && choose.id != "No"){
    choose.addEventListener("click", function(){
        input.value = input.value + choose.innerText
    })}
})

ope.forEach(sym =>{
    sym.addEventListener("click",()=>{
        input.value += sym.id;
    })
})

clear.addEventListener("click", ()=>{
    input.value ="";
})

Bbtn.addEventListener("click",()=>{
    input.value = input.value.slice(0,-1);
})

equal.addEventListener("click", ()=>{
    input.value = parseFloat((eval(input.value)).toFixed(3))
})
// No=()=>{
//     
// }

No.addEventListener("click", ()=>{
    alert("Sorry! I Don't No What Should I Do\n So Don't Press!!! D");
})