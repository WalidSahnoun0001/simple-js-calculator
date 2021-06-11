let display = document.querySelector('form input'),
    button = document.querySelectorAll('.buttons button');

    function fillIt(num) {
        display.value = display.value + num;
    }
    function clearIt() {
        display.value = "";
    }
    function deleteIt() {
        let screen = document.querySelector('form input').value;
        display.value = display.value.substring(0, screen.length -1);
    }
    function calculateIt() {
        display.value = eval(display.value);
    }