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


const buttons = [mix,couple_meal,solo_meal,hot,iced,tea,bites];

buttons.forEach((btn) =>{
    btn.addEventListener('click',() =>{
        // b is a varaible of each button na naclick
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

    });
});
