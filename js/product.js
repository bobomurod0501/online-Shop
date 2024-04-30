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

deleteIcon.forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.getAttribute("id");
    console.log(id);
    // item.parentElement.parentElement.remove();
    // localStorage.clear('object')
    // console.log(data)
    localStorage.setItem(
      "object",
      JSON.stringify(result2.filter((el) => el.id != id))
    );
  });
});
