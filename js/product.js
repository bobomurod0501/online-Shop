// const korzinkaBox = document.querySelector('.korzinkaBox')

// const shoppingNumbers = document.querySelector('.shopping-numbers')
const korzinkaBox = document.querySelector(".korzinkaBox");
// let value = 0;
const data = localStorage.getItem("object") || [];
// console.log("fghdtg", data)
const result2 = JSON.parse(data);
result2.forEach((item) => {
  const { image, title, price } = item;
  korzinkaBox.innerHTML += `

<div class="container">

<div class="productsBox">
    <div class="imgBox">
        <img src="images/deleteImg.png" class="deleteIcon" alt="">
        <img src=${image} class="productImg" alt="productImg">
    </div>
    <p>${title}</p>
    <div class="priceBox">
        <div class="Pprice">
            <p class="${price}">125</p>
            <p class="dollar">$</p>
        </div>
        <div class="Pprice numberProduct">
            <p class="minus">-</p>
            <p class="number">1</p>
            <p class="pilus">+</p>
        </div>
        <div class="Pprice ">
            <p class="numPrice">125</p>
            <p class="dollar">$</p>
        </div>
    </div>
</div>
</div>



`;
});

/* <div class="container">
<div class="productHeader">
    <h1>Products</h1>
    <div class="UnitPrice">
        <p>Unit Price</p>
        <p>QTY</p>
        <p>Price</p>
    </div>
</div>
<div class="productsBox">
    <div class="imgBox">
        <img src="images/deleteImg.png" class="deleteIcon" alt="">
        <img src="images/deleteImg.png" class="productImg" alt="productImg">
    </div>
    <div class="priceBox">
        <div class="Pprice">
            <p class="num2Price">125</p>
            <p class="dollar">$</p>
        </div>
        <div class="Pprice numberProduct">
            <p class="minus">-</p>
            <p class="number">1</p>
            <p class="pilus">+</p>
        </div>
        <div class="Pprice ">
            <p class="numPrice">125</p>
            <p class="dollar">$</p>
        </div>
    </div>
</div>
</div> */
