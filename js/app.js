const korzinka = document.querySelector('.korzinka')
const headerSearch = document.querySelector('.header-top__search')
const searchInput = document.querySelector('.search-input')
const shoppingNumbera = document.querySelector('.shopping-numbers')
const home = document.querySelector('.home ')
const electronics = document.querySelector('.electronics')
const jewelery = document.querySelector('.jewelery')
const men = document.querySelector('.men')
const women = document.querySelector('.electronics')
const all = document.querySelector('.all')
const korzinImg = document.querySelector('#number--1')
const box = document.querySelector('.box')


const updateUI = (data) => {
    console.log(data)
    
    all.addEventListener('click', ()=>{
        box.innerHTML = ''
        const result = data.slice(0,8)
    result.forEach((item)=> {
        
      const {image, title, price} = item
       box.innerHTML+=`
      <div class="cart">
        <div class="cart-img-box">
          <img class="cart-img" src=${image} alt="img">
        </div>
        <h3 class="cart-title">${title}</h3>
        <p class="rating">
            <img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img"><img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img"><img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img"><img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img"><img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img">
        </p>
        <p class="price">${price}$ <del>109.95$</del> <span>24% Off</span></p>
        <div class="cart-box">
          <img class="cart-inner-img" 
          src="https://exam-fourth-month.netlify.app/img/hearts.svg" alt="img">
          <img class="cart-inner-img korzinka_btn" id="number--1" 
          src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
        </div>
      </div>
      `
      })
    })
    jewelery.addEventListener('click', ()=>{
        box.innerHTML = ''
        const result = data.slice(5,10)
        result.forEach((item) => {
            const {image, title, price} = item
            box.innerHTML +=`
            
            <div class="cart">
            <div class="cart-img-box">
              <img class="cart-img" src=${image} alt="img">
            </div>
            <h3 class="cart-title">${title}</h3>
            <p class="rating">
                <img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img"><img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img"><img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img"><img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img"><img src="https://exam-fourth-month.netlify.app/img/star.svg" alt="img">
            </p>
            <p class="price">${price}$ <del>109.95$</del> <span>24% Off</span></p>
            <div class="cart-box">
              <img class="cart-inner-img" 
              src="https://exam-fourth-month.netlify.app/img/hearts.svg" alt="img">
              <img class="cart-inner-img korzinka_btn" id="number--1" 
              src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
            </div>
          </div>
            `
        })
    })
    
}

