const korzinkaBox = document.querySelector(".korzinkaBox");

const data = localStorage.getItem("object") || [];

const result2 = JSON.parse(data);
result2.forEach((item) => {
  const { image, title, price } = item;
  korzinkaBox.innerHTML += ` 

<div class="container">

<div class="productsBox">
    <div class="imgBox">
        <img src="images/deleteImg.png" class="deleteIcon"  alt="">
        <img src=${image} class="productImg" alt="productImg">
    </div>
    <p>${title}</p>
    <div class="priceBox">
        <div class="Pprice">
            <p class="number1Price">${price}</p>
            <p class="dollar">$</p>
        </div>
        <div class="Pprice numberProduct">
            <p class="minus">-</p>
            <p class="number">1</p>
            <p class="pilus">+</p>
        </div>
        <div class="Pprice ">
            <p class="numPrice">${price}</p>
            <p class="dollar">$</p>
        </div>
    </div>
</div>
</div>

`;
});
console.log(korzinkaBox);
const minus = document.querySelector(".minus");
const number = document.querySelector(".number");
const pilus = document.querySelector(".pilus");

let value = 0;
minus.addEventListener("click", () => {
  value--;
  number.textContent = value;
});
