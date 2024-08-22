$(document).ready(function() {
    const texts = [
        "¡Hola Preciosa!",
        "¡Ten un buen dia!",
        "¡Come bien!",
        "¡Que tengas un gran día!",
        "¡Sigue sonriendo!",
        "¡Toma agua!",
        "¡Quiero verte!",
        "¡No te preocupes, si se puede",
    ];

    const colorPairs = [
        { bg: '#FF5733', text: '#FFFFFF' },  // Naranja con texto blanco
        { bg: '#33FF57', text: '#000000' },  // Verde con texto negro
        { bg: '#3357FF', text: '#FFFFFF' },  // Azul con texto blanco
        { bg: '#FF33A8', text: '#FFFFFF' },  // Rosa con texto blanco
        { bg: '#FF8C33', text: '#000000' }   // Naranja claro con texto negro
    ];

    $('#change-bg-btn').on('click', function() {
        // Selecciona un texto y un par de colores al azar
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        const randomColorPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];

        // Cambia el texto y los colores del fondo y del texto
        $('#animated-text').text(randomText).css('color', randomColorPair.text);
        $('body').css('background-color', randomColorPair.bg);

        // Agrega un efecto de fade-in al cambiar el texto y los colores
        $('#animated-text').hide().fadeIn(1000);
    });
});