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

// 2. Point to the new container for receipt items
const receiptItemsContainer = document.getElementById("receipt-items");
const Subtotal = document.getElementById("Subtotal");
const Tax = document.getElementById("Tax");
const total = document.getElementById("total");

// Original values
let subAmount = 0;
const taxRate = 0.12;

// 3. Loop through all buttons
addToCartButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        // Get the parent food container
        const foodDiv = this.closest(".food");

        // Get Name and Price
        const foodName = foodDiv.querySelector(".title").textContent;
        const priceText = foodDiv.querySelector(".price").textContent;

        // Convert "₱60.00" to the number 60
        const priceNumber = parseFloat(priceText.replace('₱', ''));

        // Create the new item and add it to the receipt container
        const newItem = document.createElement("div");
        newItem.textContent = `${foodName}: ₱${priceNumber.toFixed(2)}`;
        receiptItemsContainer.appendChild(newItem);

        // Math Calculations
        subAmount += priceNumber;
        const taxAmount = subAmount * taxRate; // Fixed the missing * operator
        const totalAmount = subAmount + taxAmount;

        // Update the DOM elements
        Subtotal.textContent = `₱${subAmount.toFixed(2)}`;
        Tax.textContent = `₱${taxAmount.toFixed(2)}`;
        total.textContent = `₱${totalAmount.toFixed(2)}`;
        
        // Optional: Hide the "Your tray is feeling light!" message
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
