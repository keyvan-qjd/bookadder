const form = document.querySelector("#form");

const title= document.querySelector("#title");

const price = document.querySelector("#price");

const products = document.querySelector("#products");

const addProduct = function addProduct(event){
    event.pereventDefault();
    
    const productItem = document.createElement("li");
    const productInfo = document.createTextNode(`${title.value}} - ${price.value}`);
    productItem.appendChild(productInfo);

    products.appendChild(productItem);
}

form.addEventListener("submit", addProduct)