// Menú hamburguesa (celular)
const btnMenu = document.getElementById('btnMenu');
const menu = document.querySelector('.menu');

if (btnMenu && menu) {
    btnMenu.addEventListener('click', function () {
        menu.classList.toggle('abierto');
    });
}

// Preguntas frecuentes (acordeón)
document.querySelectorAll('.accordion .titulo').forEach(function (boton) {
    boton.addEventListener('click', function () {
        boton.parentElement.classList.toggle('activo');
    });
});
