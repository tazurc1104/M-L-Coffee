const addToCartWithVariant = document.querySelectorAll('.addtocart.withvariant');
const addToCartWithoutVariant = document.querySelectorAll('.addtocart.withoutvariant');
const orderVariant = document.querySelectorAll('#variant');
const quantityWithVariant = document.querySelectorAll('.quantity.withvariant');
const quantityWithoutVariant = document.querySelectorAll('.quantity.withoutvariant');
const clearCart = document.querySelector('.clearcart');
const cart = document.querySelector('.cart');
var cartOpened = false;
const cartDisplay = document.querySelector('.cartopen');
const hamburger = document.querySelector('.hamburger-icon'); 
var order = JSON.parse(localStorage.getItem('order')) || [];
var price = JSON.parse(localStorage.getItem('price')) || [];
var variant = JSON.parse(localStorage.getItem('variant')) || [];
var quantity = JSON.parse(localStorage.getItem('quantity')) || [];
var table = document.getElementById("carttablevalue");

for (var i = 0; i < addToCartWithVariant.length; i++){
    (function(index){
        addToCartWithVariant[index].addEventListener("click", function(){
            order.push(addToCartWithVariant[index].value);
            variant.push(orderVariant[index].value);
            quantity.push(quantityWithVariant[index].value);
            if (index === 0){
                if(orderVariant[index].value === "Barako (Black)"){
                    price.push("₱" + (quantityWithVariant[index].value * 23)) 
                }
                else if (orderVariant[index].value === "Arabica (Kraft)"){
                    price.push("₱" + (quantityWithVariant[index].value * 25)) 
                }
                else if (orderVariant[index].value === "Robusta (White)"){
                    price.push("₱" + (quantityWithVariant[index].value * 23)) 
                }
            }
            else if (index === 1){
                price.push("₱65")
            }
            else if (index === 2){
                if(orderVariant[index].value === "Barako (Black)"){
                    price.push("₱" + (quantityWithVariant[index].value * 150)) 
                }
                else if (orderVariant[index].value === "Arabica (Kraft)"){
                    price.push("₱" + (quantityWithVariant[index].value * 180)) 
                }
                else if (orderVariant[index].value === "Robusta (White)"){
                    price.push("₱" + (quantityWithVariant[index].value * 150)) 
                }
            }
            localStorage.setItem('order', JSON.stringify(order));
            localStorage.setItem('variant', JSON.stringify(variant));
            localStorage.setItem('quantity', JSON.stringify(quantity));
            localStorage.setItem('price', JSON.stringify(price));
            while (table.rows.length > 1) {
                table.deleteRow(1);
            }

            
            generateTable();
        });
    })(i);
}



for (var i = 0; i < addToCartWithoutVariant.length; i++){
    (function(index){
        addToCartWithoutVariant[index].addEventListener("click", function(){
            order.push(addToCartWithoutVariant[index].value);
            variant.push("No Variant");
            quantity.push(quantityWithoutVariant[index].value);
            price.push("₱" + (quantityWithoutVariant[index].value * 180)) 
            localStorage.setItem('order', JSON.stringify(order));
            localStorage.setItem('variant', JSON.stringify(variant));
            localStorage.setItem('quantity', JSON.stringify(quantity));
            localStorage.setItem('price', JSON.stringify(price));
            while (table.rows.length > 1) {
                table.deleteRow(1);
            }

            
            generateTable();
        });
    })(i);
}

function generateTable (){
    for (var i = 0; i < order.length; i++) {
        var row = table.insertRow(-1);
        var orderCell = row.insertCell(0);
        var variantCell = row.insertCell(1)
        var quantityCell = row.insertCell(2);
        var priceCell = row.insertCell(3);
       
       
        
    
        orderCell.innerHTML = order[i];
        variantCell.innerHTML = variant[i];
        quantityCell.innerHTML = quantity[i];
        priceCell.innerHTML = price[i];
        
        
      }
}

clearCart.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
});

cart.addEventListener("click",function(){
    if (cartOpened === false){
        cartDisplay.style.opacity = 1;
        cartOpened = true;
    }
    else if (cartOpened === true){
        cartDisplay.style.opacity = 0;
        cartOpened = false;
    }
});
window.addEventListener("scroll", function() {
    if (window.scrollY >= 500) {
      cartDisplay.style.opacity = 0;
      cartOpened = false;
    }
  });

generateTable();






