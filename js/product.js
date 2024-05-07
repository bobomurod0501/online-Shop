// const { format } = require("path");

const korzinkaBox = document.querySelector(".korzinkaBox");

const data = localStorage.getItem("object") || [];

const result2 = JSON.parse(data);
console.log(result2);
result2.forEach((item) => {
  const { image, title, price, id, rating } = item;

  korzinkaBox.innerHTML += ` 

<div class="container">

<div class="productsBox">
    <div class="imgBox parent_${id}">
        <img src="images/deleteImg.png" class="deleteIcon" id="${id}" alt="deleteIcon">
        
        <img src=${image} class="productImg" alt="productImg">
    </div>
    <p class="productTitle">${title}</p>
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

  //   const deleteBtn = document.createElement("img");
  //   deleteBtn.setAttribute("src", "images/deleteImg.png");
  //   deleteBtn.setAttribute("class", "deleteIcon");
  //   deleteBtn.setAttribute("alt", "delete Icon");
  //   const parentItem = document.querySelector(`.parent_${id}`);
  //   parentItem.addEventListener("click", () => {
  //     console.log("id", id);
  //   });

  //   parentItem.prepend(deleteBtn);
});

const minus = document.querySelectorAll(".minus");
const number = document.querySelectorAll(".number");
const pilus = document.querySelectorAll(".pilus");
const number1Price = document.querySelectorAll(".number1Price");
const numPrice = document.querySelectorAll(".numPrice");
const deleteIcon = document.querySelectorAll(".deleteIcon");
const hidden = document.querySelector(".hidden");

const totalSum = document.querySelector(".totalSum");

const arr = [];
let sum = 0;
result2.forEach((item) => {
  arr.push(Number(item.price));
});
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
// console.log(sum.toFixed(2))
totalSum.textContent = sum.toFixed(2);

let val1 = 1;
let unitPrice = 0;
minus.forEach((item) => {
  let Pprice = Number(
    Array.from(item.parentElement.parentElement.lastElementChild.children)[0]
      .textContent
  );
  item.addEventListener("click", () => {
    if (Array.from(item.parentElement.children)[1].textContent > 1) {
      Array.from(item.parentElement.children)[1].textContent -= 1;
      Array.from(
        item.parentElement.parentElement.lastElementChild.children
      )[0].textContent = (
        Number(
          Array.from(
            item.parentElement.parentElement.lastElementChild.children
          )[0].textContent
        ) - Pprice
      ).toFixed(2);
      totalSum.textContent = (Number(totalSum.textContent) - Pprice).toFixed(2);
    } else {
      Array.from(item.parentElement.children)[1].textContent = 1;
    }
  });
});

pilus.forEach((item) => {
  let Pprice = Number(
    Array.from(item.parentElement.parentElement.lastElementChild.children)[0]
      .textContent
  );
  item.addEventListener("click", () => {
    // console.log(Number(Array.from(item.parentElement.children)[1].textContent) = 1)
    Array.from(item.parentElement.children)[1].textContent =
      Number(Array.from(item.parentElement.children)[1].textContent) + 1;
    totalSum.textContent = (Number(totalSum.textContent) + Pprice).toFixed(2);
    Array.from(
      item.parentElement.parentElement.lastElementChild.children
    )[0].textContent = (
      Number(
        Array.from(
          item.parentElement.parentElement.lastElementChild.children
        )[0].textContent
      ) + Pprice
    ).toFixed(2);
  });
});
deleteIcon.forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("id");
    console.log(id);
    item.parentElement.parentElement.remove();
    const data = localStorage.getItem("object") || [];

    const result2 = JSON.parse(data);

    localStorage.setItem(
      "object",
      JSON.stringify(result2.filter((el) => el.id != id))
    );

    // console.log(Number(Array.from(Array.from(item.parentElement.parentElement.lastElementChild.children)[2].children)[0].textContent))
    totalSum.textContent = (Number(totalSum.textContent) - Number(Array.from(Array.from(item.parentElement.parentElement.lastElementChild.children)[2].children)[0].textContent)).toFixed(2)


  });
});

const buyNow = document.querySelector('.buyNow')
// const korzinkaBox = document.querySelector('.korzinkaBox')


  // console.log(item)
  buyNow.addEventListener('click', () => {
    alert("haridingiz uchun rahmat")
    localStorage.clear()
    korzinkaBox.remove()
    totalSum.textContent = 0
  })