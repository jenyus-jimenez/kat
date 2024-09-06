$(document).ready(function() {
    const texts = [
        "¡Animo!",
        "¡Tu puedes!",
        "¡Come bien!",
        "¡Toma agua!",
    ];

    const colorPairs = [
        { bg: '#FF5733', text: '#FFFFFF', img: 'url("img/gato1.jpg")' },  // Naranja con texto blanco
        { bg: '#33FF57', text: '#000000', img: 'url("img/gato2.jpg")' },  // Verde con texto negro
        { bg: '#3357FF', text: '#FFFFFF', img: 'url("img/gato3.jpg")' },  // Azul con texto blanco
        { bg: '#FF33A8', text: '#FFFFFF', img: 'url("img/gato4.jpg")' },  // Rosa con texto blanco
    ];
    $('#change-bg-btn').on('click', function() {
        // Selecciona un texto y un par de colores al azar
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        const randomColorPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];

        // Cambia el texto y los colores del fondo y del texto
        $('#animated-text').text(randomText);
        // $('body').css('background-color', randomColorPair.bg);
        $('#bg-img').css('background-image', randomColorPair.img);

        // Agrega un efecto de fade-in al cambiar el texto y los colores
        $('#animated-text').hide().fadeIn(1000);
    });
});