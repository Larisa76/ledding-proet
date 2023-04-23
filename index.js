let btn = document.querySelector('.wrapper__btn') 
let navList = document.querySelector('.navigation')


btn.addEventListener('click', () => {
    navList.classList.toggle('show-list')  
})

