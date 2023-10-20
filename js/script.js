// Obtén todos los círculos de color
const colorCircles = document.querySelectorAll('.color-option .circle');

// Maneja el clic en una opción de color
function handleColorOptionClick(event) {
    const selectedColor = event.target.dataset.option;
    const container = event.target.closest('.container'); // Encuentra el contenedor más cercano al botón

    // Encuentra la imagen correspondiente al color seleccionado
    const selectedImage = container.querySelector(`.main-images .${selectedColor}`);

    // Remueve la clase "active" de todas las imágenes en el contenedor
    container.querySelectorAll('.main-images img').forEach(img => {
        img.classList.remove('active');
    });

    // Establece la imagen correspondiente como activa en el contenedor
    selectedImage.classList.add('active');
}

// Agrega un evento de clic a los círculos de color en cada contenedor
colorCircles.forEach(circle => {
    circle.addEventListener('click', handleColorOptionClick);
});
