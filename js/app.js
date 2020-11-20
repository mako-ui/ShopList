const addButton = document.getElementById('add');
const prodName = document.querySelector('#item-name');
const prodPrice = document.querySelector('#item-price');
const totalSpan = document.querySelector('.total-price');
const list = document.querySelector("#item-list");
let total = 0;

addButton.addEventListener('click', (event)=> {
    let productName = prodName.value; //get the food name from the input field
    let productPrice = parseInt(prodPrice.value); //get the calories from the input field
    total = total + productPrice; //calculates the total calorie intake
    totalSpan.innerHTML = total;

    let listItem = document.createElement("li");
    listItem.classList.add("collection-item");
    let text = `Product: ${productName}. Price: ${productPrice} €`;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);
    //clear the input fields
    prodName.value = '';
    prodPrice.value = '';

    console.log('Product:', typeof(productName));
    console.log('Price:', typeof(productPrice));
    console.log('Total:', total);

    event.preventDefault();
});
