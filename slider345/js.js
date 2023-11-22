function but1() {
    var elements = document.getElementsByClassName('ich');
    for (var i = 0; i < elements.length; i++) {
    if (elements[i].style.display !== 'none') {
    elements[i].style.display = 'none';
    if (i < elements.length - 1) {
    elements[i + 1].style.display = 'block';
    break;
    }
    }
    }
    }
    function but0() {
        var currentElement = $('.ich:visible');
        if (currentElement.length > 0) {
        currentElement.hide();
        var previousElement = currentElement.prev('.ich');
        if (previousElement.length > 0) {
        previousElement.show();
        } else {
        // Если предыдущего элемента нет, можно показать первый элемент с классом "ich" или сделать другие действия
        }
        } else {
        console.log('Текущий элемент с классом "ich" не найден или уже скрыт');
        }
        }