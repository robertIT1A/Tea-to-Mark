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

// mix.addEventListener('click', ()=>{
//     defult.classList.remove('active');
//     mix.classList.add('active');
//     mix_menu.classList.add('active');
// });
// couple_meal.addEventListener('click', ()=>{
//     defult.classList.remove('active');
//     couple_meal.classList.add('active');
//     mix_menu.classList.add('active');
// });
// couple_meal.addEventListener('click', ()=>{
//     defult.classList.remove('active');
//     couple_meal.classList.add('active');
//     mix_menu.classList.add('active');
// });
// solo_meal.addEventListener('click', ()=>{
//     defult.classList.remove('active');
//     solo_meal.classList.add('active');
//     mix_menu.classList.add('active');
// });
// hot.addEventListener('click', ()=>{
//     defult.classList.remove('active');
//     hot.classList.add('active');
//     mix_menu.classList.add('active');
// });
// iced.addEventListener('click', ()=>{
//     defult.classList.remove('active');
//     iced.classList.add('active');
//     mix_menu.classList.add('active');
// });
// tea.addEventListener('click', ()=>{
//     defult.classList.remove('active');
//     tea.classList.add('active');
//     mix_menu.classList.add('active');
// });
// bites.addEventListener('click', ()=>{
//     defult.classList.remove('active');
//     bites.classList.add('active');
//     mix_menu.classList.add('active');
// });
