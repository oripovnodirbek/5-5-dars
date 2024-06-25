const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const image = document.querySelector('imag')

image.addEventListener('click', function() {
    dark.classList.remove('dark')
    dark.classList.add('light')
})