const showBanner = document.getElementById("showBanner")
const modal = document.querySelector('.modal-background')
const removeBtnOne = document.getElementById("remove1")
const removeBtnTwo = document.getElementById("remove2")
const banner = document.querySelector(".banner")
const navbar = document.querySelector(".navbar")
const leftPanel = document.querySelector(".left-panel")
const rightArrow = document.querySelector(".right-arrow")
const leftArrow = document.querySelector(".left-arrow")

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
rightArrow.addEventListener('click', ()=>{
    leftPanel.style.width = '100%'
    leftPanel.style.opacity = '100%'
    rightArrow.style.display = "none"
    leftArrow.style.display = "inline-block"
})
leftArrow.addEventListener('click', ()=>{
    leftPanel.style.width = '25px'
    leftPanel.style.opacity = '50%'
    rightArrow.style.display = "inline-block"
    leftArrow.style.display = "none"
})