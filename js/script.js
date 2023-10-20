
const colorCircles = document.querySelectorAll('.color-option .circle');


function handleColorOptionClick(event) {
    const selectedColor = event.target.dataset.option;
    const container = event.target.closest('.container');

  
    const selectedImage = container.querySelector(`.main-images .${selectedColor}`);

   
    container.querySelectorAll('.main-images img').forEach(img => {
        img.classList.remove('active');
    });


    selectedImage.classList.add('active');
}


colorCircles.forEach(circle => {
    circle.addEventListener('click', handleColorOptionClick);
});
