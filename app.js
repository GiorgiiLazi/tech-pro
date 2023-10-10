const showBanner = document.getElementById("showBanner")
const modal = document.querySelector('.modal-background')
const removeBtnOne = document.getElementById("remove1")
const removeBtnTwo = document.getElementById("remove2")
const banner = document.querySelector(".banner")
const navbar = document.querySelector(".navbar")

showBanner.addEventListener('click', ()=>{
    modal.style.display = ""
})
removeBtnOne.addEventListener('click', ()=>{
    banner.style.display = "none"
    navbar.style.top = '0px'
})
removeBtnTwo.addEventListener('click', ()=>{
    modal.style.display = "none"
})
console.log('test')