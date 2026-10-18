// menu
const mix = document.getElementById('mix_and_match');
const couple_meal = document.getElementById('couple_meal');
const solo_meal = document.getElementById('solo_meal'); 
const hot = document.getElementById('hot'); 
const iced = document.getElementById('iced'); 
const tea = document.getElementById('tea'); 
const bites = document.getElementById('bites'); 


const mix_menu = document.querySelector('.mix_and_match');
const defult = document.querySelector('.defult');
const startbtn = document.querySelector('.startbtn');



//  ito yung pag nag add to cart
// querySelectorAll para matarget lahat yung button
const addToCartButtons = document.querySelectorAll(".add-to-cart");


const receiptItemsContainer = document.getElementById("receipt-items");
const Subtotal = document.getElementById("Subtotal");
const Tax = document.getElementById("Tax");
const total = document.getElementById("total");

// Original values
let subAmount = 0;
const taxRate = 0.12;


addToCartButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        const foodDiv = this.closest(".food");

        const foodName = foodDiv.querySelector(".title").textContent;
        const priceText = foodDiv.querySelector(".price").textContent;

        const priceNumber = parseFloat(priceText.replace('₱', ''));

        const newItem = document.createElement("div");
        newItem.textContent = `${foodName}: ₱${priceNumber.toFixed(2)}`;
        receiptItemsContainer.appendChild(newItem);

        subAmount += priceNumber;
        const taxAmount = subAmount * taxRate; 
        const totalAmount = subAmount + taxAmount;

        Subtotal.textContent = `₱${subAmount.toFixed(2)}`;
        Tax.textContent = `₱${taxAmount.toFixed(2)}`;
        total.textContent = `₱${totalAmount.toFixed(2)}`;

        const noItemMessage = document.querySelector(".no_item");
        if(noItemMessage) {
            noItemMessage.style.display = "none";
        }
    });
});








//  ito ayy para lang mag karon nang active sa menu
buttons.forEach((btn) =>{
    btn.addEventListener('click',() =>{
        // b is a varaible of each button na naclick
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

    });
});
