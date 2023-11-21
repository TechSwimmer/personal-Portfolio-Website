//light-dark mode toggle effect----------------------------------------------------------------------------------------------

// select elements whose behaviour has to be changed store them in variables

const themeToggle = document.querySelector('#themeToggle');

const lightImage = document.querySelector('.light-icon');
const darkImage = document.querySelector('.dark-icon');
console.log(darkImage);

themeToggle.addEventListener('click', function() {
    lightImage.classList.toggle('toggle-display');
    darkImage.classList.toggle('toggle-display');
})


// applying the selected theme from above to the entire page

function themeSelect(){
    
}