const wrapper = document.querySelector(".wrapper");
const navLink = document.querySelectorAll("a");
const btn = document.querySelector(".btn");
const p = document.querySelectorAll("p");
const h1 = document.querySelectorAll("h1");
const ddd = document.querySelectorAll(".three_bigbox__box_one ")
const www = document.querySelectorAll(" .three_bigbox__box_two ")
const aaa = document.querySelectorAll(" .three_bigbox__box_three ")
const eee = document.querySelectorAll(" .two__box_one ")
const qqq = document.querySelectorAll(" .four__one_box ")
const rrr = document.querySelectorAll(" .five__box ")
const ttt = document.querySelectorAll(" .six__box_one")

btn.addEventListener("click", function(e) {
    wrapper.classList.toggle("backcol");
    for (i of navLink) {
        i.classList.toggle("colors")
    }
    for (i of p) {
        i.classList.toggle("colors")
    }
    for (i of h1) {
        i.classList.toggle("colors")
    }
    for (i of ddd) {
        i.style.border = "1px solid white"
    }
    for (i of www) {
        i.style.border = "1px solid white"
    }
    for (i of aaa) {
        i.style.border = "1px solid white"
    }
    for (i of eee) {
        i.style.border = "1px solid white"
    }
    for (i of qqq) {
        i.style.border = "1px solid white"
    }
    for (i of rrr) {
        i.style.border = "1px solid white"
    }
    for (i of ttt) {
        i.style.border = "1px solid white"
    }
    btn.style.backgroundColor = "white";
    btn.style.color = "black "

})

window.addEventListener('DOMContentLoaded', (event) => {
    let round = document.querySelector(".rounder")
    setTimeout(() => {
        round.style.display = "none"
    }, 2000)
})