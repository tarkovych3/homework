let product = [
  {
    id: 1,
    name: "Смартфон Samsung Galaxy A51 4/64GB Blue",
    price: 8499,
    image_url:'img/108515-samsung-galaxy-s10-plus-8-128gb-red.webp',
    info: "test-info",
  },
  {
    id: 2,
    name: "Смартфон Samsung Galaxy A30s 3 / 32GB Black",
    price: 4999,
    image_url: "img/109095-samsung-galaxy-note-10-8-256gb-aura-glow.webp",
    info: "test-info"
  },
  {
    id: 3,
    name: "TesСмартфон Nokia 5.1 Plus 3/32GB Black",
    price: 2999,
    image_url: "img/109249-samsung-galaxy-a10s-2-32gb-blue.webp",
    info: "test-info"
  },
  {
    id: 4,
    name: "Смартфон Samsung Galaxy A10s 2/32GB Black",
    price: 6999,
    image_url: "img/109259-samsung-galaxy-a30s-3-32gb-green.webp",
    info: "test-info"
  },
  {
    id: 5,
    name: "Смартфон Nokia 3.1 Plus Dual Sim (TA-1104) Marengo",
    price: 3999,
    image_url: "img/109444-samsung-galaxy-a10s-2-32-red.webp",
    info: "test-info"
  },
  {
    id: 6,
    name: "Смартфон Tecno Spark 4 3/32GB Vacation Blue",
    price: 4999,
    image_url: "img/109444-samsung-galaxy-a10s-2-32-red.webp",
    info: "test-info"
  },
  {
    id: 7,
    name: "Смартфон Tecno Spark 4 3/32GB Vacation Blue",
    price: 2999,
    image_url: "img/112143-samsung-galaxy-a71-6-128gb-black.webp",
    info: "test-info"
  },
  {
    id: 8,
    name: "Смартфон Samsung Galaxy A50 6/128GB Black",
    price: 1999,
    image_url: "img/112149-samsung-galaxy-a51-4-64gb-blue.webp",
    info: "test-info"
  }
];
let btn =`<button class="btn btn-danger btn-block">Купити</button>`
function createProductTable(product) {
  let productHtml = ``;
  for (i = 0; i < product.length; i++) {
    productHtml += `
          <div class="product_list shadow" id="product_${product[i].id}">
            <div class="block_image"><img src='${product[i].image_url}'></div>
            <div class="block_name">${product[i].name}</div>
            <div class="block_price">${product[i].price}</div>
            <div class="block_pay">${btn}</div>
          </div> 
          `;
  }
  return productHtml;
}
document.getElementById("pruduct").innerHTML = createProductTable(
  product
);