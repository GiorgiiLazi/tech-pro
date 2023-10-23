const showBanner = document.getElementById("showBanner")
const bannerDate = document.querySelector("#date")
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
const subModalText2 = document.querySelector(".sub-modal-text2")
const removeBtnThree = document.getElementById("remove3")
const mainSection = document.querySelector(".main-section")
const aboutSection = document.querySelector('.about')
const aboutRef = document.getElementById('aboutRef')
const aboutBackBtn = document.querySelector('#aboutBackBtn')
const signInSection = document.querySelector('.sign-in')
const signInForm = document.querySelector('.sign-form')
const userName = document.getElementById('username')
const phoneNumber = document.getElementById('phoneNumber')
const formEmail = document.getElementById('form-email')
const formPassword1 = document.getElementById('form-password1')
const formPassword2 = document.getElementById('form-password2')
const checkSendAds = document.getElementById('sendAds')
const formBackBtn = document.querySelector('#formBackBtn')
const signInRef = document.getElementById('joinRef')
const sections = document.querySelectorAll(".section")
const regPop = document.querySelector(".reg-Pop")
const reviewsSection = document.querySelector('.reviewsSection')
const regInHeader = document.getElementById('regIn-header')
const regInText = document.getElementById('regIn-text')
const reviewForm = document.querySelector('.review-form')
const reviewName = document.getElementById('review-name')
const reviewText = document.getElementById('review-text')
const customersReviews = document.querySelector('.customers-reviews')
const customerReview = document.querySelector('.customer-review')
const reviewsRef = document.getElementById('reviewsRef')





// assign date to banner
const date = new Date()

bannerDate.textContent =  date.toDateString()

// show banner
showBanner.addEventListener('click', ()=>{
    modal.classList.remove('not-show')
})

// remove banners
removeBtnOne.addEventListener('click', ()=>{
    banner.classList.add('not-show')
    navbar.style.top = '0px'
})
removeBtnTwo.addEventListener('click', ()=>{
    modal.classList.add('not-show')
})

// subscription form
subForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    subModal.classList.remove('not-show')
    
    subModalText.textContent = `Thank you for subscribing to our newsletter ${subName.value.toUpperCase().trim()}!!!`
    subModalText2.textContent = `From now on you will receive information on discounts and our special offers to your Email address ${mail.value.trim()}!!!`

    console.log(subName.value.toUpperCase().trim())
    console.log(mail.value.trim())
    
    subForm.reset()
})
removeBtnThree.addEventListener('click', ()=>{
    subModal.classList.add('not-show')
})

// show about

aboutRef.addEventListener('click', ()=>{
    sections.forEach(section =>{
        section.classList.add('not-show')
    })
    
    aboutSection.classList.remove('not-show')
})

aboutBackBtn.addEventListener('click', ()=>{
    mainSection.classList.remove('not-show')
    aboutSection.classList.add('not-show')
})

// sign in form
signInRef.addEventListener('click', ()=>{
    sections.forEach(section =>{
        section.classList.add('not-show')
    })
    
    signInSection.classList.remove('not-show')
})

formBackBtn.addEventListener('click', ()=>{
    mainSection.classList.remove('not-show')
    signInSection.classList.add('not-show')
})

signInForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    regPop.classList.remove('not-show')

    // check for mistakes in password
    if(formPassword1.value === formPassword2.value){
        regInHeader.textContent = 'You have successfully registered'
        if(checkSendAds.checked){
            regInText.textContent = "You shall receive our special offers to your email"
        }
        else{
            regInText.textContent = ""
        }
    }
    else{
        regInHeader.textContent = 'Try again please'
    }
    
    // auto-Popup removal
    setTimeout(() =>{
        regPop.classList.add('not-show')
    }, 5000)

    // console.log(userName.value)
    // console.log(phoneNumber.value)
    // console.log(formEmail.value)
    // console.log(formPassword1.value)
    // console.log(formPassword2.value)
    // console.log(checkSendAds.checked)
    
    subForm.reset()
})

// review form

reviewsRef.addEventListener('click', ()=>{
    sections.forEach(section =>{
        section.classList.add('not-show')
    })
    
    reviewsSection.classList.remove('not-show')
})

reviewForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    scrollTo({ top: 0, behavior: 'smooth' })
    
    const template = document.createElement("div")
    template.innerHTML = `
        <li id="customer-review1">
            <h2>"${reviewText.value}"</h2>
            <p>— ${reviewName.value}</p>
        </li>
    `
    customersReviews.prepend(template)

    reviewForm.classList.add('not-show')
    
    
    subForm.reset()
})