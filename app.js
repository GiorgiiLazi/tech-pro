const showBanner = document.getElementById("showBanner")
const modal = document.querySelector('.modal-background')
const removeBtnOne = document.getElementById("remove1")
const removeBtnTwo = document.getElementById("remove2")
const banner = document.querySelector(".banner")
const navbar = document.querySelector(".navbar")
const leftPanel = document.querySelector(".left-panel")
const rightArrow = document.querySelector(".right-arrow")
const leftArrow = document.querySelector(".left-arrow")
const subForm = document.querySelector(".subForm")
const subModal = document.querySelector('.subBackground')
const mail = document.getElementById('mail')
const subName = document.getElementById('name')
const subModalText = document.querySelector(".sub-modal-text")
const removeBtnThree = document.getElementById("remove3")

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
leftPanel.addEventListener('click', ()=>{
    if(leftArrow.style.display == "none"){
        leftPanel.style.width = '180px'
        rightArrow.style.display = "none"
        leftArrow.style.display = "inline-block"
    }
    else if(rightArrow.style.display == "none"){
        leftPanel.style.width = '25px'
        rightArrow.style.display = "inline-block"
        leftArrow.style.display = "none"
    }
})
subForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    subModal.style.display = "block"
    
    subModalText.textContent = `Thank you for subscribing to our newsletter ${subName.value.toUpperCase().trim()}. From now on you will receive information on discounts and our special offers to your Email address ${mail.value.trim()}!!!`

    console.log(subName.value.toUpperCase().trim())
    console.log(mail.value.trim())
    
    subForm.reset()
})
removeBtnThree.addEventListener('click', ()=>{
    subModal.style.display = "none"
})
