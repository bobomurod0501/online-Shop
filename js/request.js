const API = "https://fakestoreapi.com/products";

const getData = async () => {
  const request = await fetch(API);
  const data = request.json();
  return data;
};

getData()
  .then((data) => {
    updateUI(data);
  })
  .catch((err) => {
    console.log(err);
  });
