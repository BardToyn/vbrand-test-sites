/*LOADING*/

document.addEventListener('DOMContentLoaded', function () {
    // Выбираем блок .loading-wrap
    const loadingWrap = document.querySelector('.loading-wrap');

    // Задержка на 2 секунды для исчезновения блока
    setTimeout(() => {
        loadingWrap.style.opacity = '0'; // Устанавливаем нулевую прозрачность
        setTimeout(() => {
            loadingWrap.style.display = 'none'; // Скрываем блок
        }, 1000); // По истечении 1 секунды скрываем блок полностью
    }, 2000); // Устанавливаем 2 секунды задержки перед скрытием блока
});

/*LOADING*/