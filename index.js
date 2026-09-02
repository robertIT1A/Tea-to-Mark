const wrapper = document.querySelector('.wrapper');
const startbtn = document.querySelector('.startbtn');
const front = document.querySelector('.front');

startbtn.addEventListener('click', ()=>{
    wrapper.classList.add('active');
    front.classList.add('hidden');
});
