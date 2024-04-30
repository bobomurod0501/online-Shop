const korzinka = document.querySelector(".korzinka");
const headerSearch = document.querySelector(".header-top__search");
const searchInput = document.querySelector(".searchInut");
const shoppingNumbers = document.querySelector(".shopping-numbers");
const home = document.querySelector(".home ");
const electronics = document.querySelector(".electronics");
const jewelery = document.querySelector(".jewelery");
const men = document.querySelector(".men");
const women = document.querySelector(".women");
const all = document.querySelector(".all");
const korzinImg = document.querySelectorAll(".korzinka_btn");
const box = document.querySelector(".box");
const loadBtn = document.querySelector(".loadBtn");
const activeLink = document.querySelector(".active-link");
// const hidden = document.querySelector(".hidden");
const hero = document.querySelector(".hero");
const mainSection = document.querySelector(".mainSection");
const general = document.querySelector(".general");
const free = document.querySelector(".free");
const products = document.querySelector(".products");
const headerLastLink = document.querySelector(".shopcard");

// const korzinkaBox = document.querySelector('.korzinkaBox')
//  headerSearch['searchInut'].addEventListener('input', () => {
//   const inutValue = headerSearch['searchInut'].value
//   console.log(inutValue)
// })
headerSearch["text"].addEventListener("input", () => {
  const inputValue = headerSearch["text"].value.toLowerCase();
  // console.log(inputValue)
  // productName
  const productName = document.querySelectorAll(".cart-title");
  productName.forEach((item) => {
    if (item.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});

const showProducts = () => {};

const removeActive = () => {
  jewelery.classList.remove("active-link");
  electronics.classList.remove("active-link");
  women.classList.remove("active-link");
  men.classList.remove("active-link");
  all.classList.remove("active-link");
};

const updateUI = (data) => {
  console.log(data);

  // all.addEventListener("click", () => {
  removeActive();
  all.classList.add("active-link");
  box.innerHTML = "";
  const result = data.slice(0, 8);
  result.forEach((item) => {
    const { image, title, price, id } = item;
    box.innerHTML += `
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
          <img class="cart-inner-img korzinka_btn" id="${id}" 
          src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
        </div>
      </div>
      `;
  });
  // });
  all.addEventListener("click", () => {
    removeActive();
    all.classList.add("active-link");
    box.innerHTML = "";
    const result = data.slice(0, 8);
    result.forEach((item) => {
      const { image, title, price, id } = item;
      box.innerHTML += `
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
          <img class="cart-inner-img korzinka_btn" id="${id}" 
          src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
        </div>
      </div>
      `;
    });
  });
  jewelery.addEventListener("click", () => {
    removeActive();
    jewelery.classList.add("active-link");
    box.innerHTML = "";
    const result = data.slice(4, 8);
    result.forEach((item) => {
      const { image, title, price, id } = item;
      box.innerHTML += `
                
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
                  <img class="cart-inner-img korzinka_btn" id="${id}" 
                  src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
                </div>
              </div>
                `;
    });
  });
  electronics.addEventListener("click", () => {
    removeActive();
    electronics.classList.add("active-link");
    box.innerHTML = "";
    const result = data.slice(8, 14);
    console.log(result);
    result.forEach((item) => {
      // if(item.category === 'jewelery'){
      const { image, title, price, id } = item;
      box.innerHTML += `
                
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
                  <img class="cart-inner-img korzinka_btn" id="${id}" 
                  src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
                </div>
              </div>
                `;
    });
  });

  women.addEventListener("click", () => {
    removeActive();
    women.classList.add("active-link");
    box.innerHTML = "";
    const result = data.slice(14, 20);
    console.log(result);
    result.forEach((item) => {
      // if(item.category === 'jewelery'){
      const { image, title, price, id } = item;
      box.innerHTML += `
                
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
                  <img class="cart-inner-img korzinka_btn" id="${id}" 
                  src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
                </div>
              </div>
                `;
    });
  });
  men.addEventListener("click", () => {
    removeActive();
    men.classList.add("active-link");
    box.innerHTML = "";
    const result = data.slice(0, 4);
    console.log(result);
    result.forEach((item) => {
      // if(item.category === 'jewelery'){
      const { image, title, price, id } = item;
      box.innerHTML += `
                
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
                  <img class="cart-inner-img korzinka_btn" id="${id}" 
                  src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
                </div>
              </div>
                `;
    });
  });
  loadBtn.addEventListener("click", () => {
    removeActive();
    box.innerHTML = "";
    data.forEach((item) => {
      const { image, title, price, id } = item;
      box.innerHTML += `
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
                  <img class="cart-inner-img korzinka_btn" id="${id}" 
                  src="https://exam-fourth-month.netlify.app/img/korzinka_2.svg" alt="img">
                </div>
              </div>
           `;
    });
  });

  const newArray = JSON.parse(localStorage.getItem("object")) || [];
  let value = newArray.length;
  shoppingNumbers.textContent = newArray.length;
  data.forEach((item) => {
    const { id } = item;

    document.addEventListener("click", (e) => {
      if (e.target.id == `${id}`) {
        const result = data[`${id - 1}`];
        const isHaveLocalStorage = newArray.find((el) => el.id === result.id);
        console.log(isHaveLocalStorage);
        if (!isHaveLocalStorage) {
          newArray.push(result);
          value++;
          shoppingNumbers.textContent = value;
        } else {
          alert("Bu maxsulotni oldin kiritgansiz");
        }
      }

      // console.log(localStorage.getItem("object")[`${id - 1}`]);

      localStorage.setItem("object", JSON.stringify(newArray));
    });
  });
};

// shoppingNumbers.textContent = newArray.length
