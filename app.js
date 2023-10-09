const showBanner = document.getElementById("showBanner")
const modal = document.querySelector('.modal-background')
const removeBtnOne = document.getElementById("remove1")
const removeBtnTwo = document.getElementById("remove2")
const banner = document.querySelector(".banner")

showBanner.addEventListener('click', ()=>{
    modal.style.display = ""
})
removeBtnOne.addEventListener('click', ()=>{
    banner.style.display = "none"
})
removeBtnTwo.addEventListener('click', ()=>{
    modal.style.display = "none"
})
