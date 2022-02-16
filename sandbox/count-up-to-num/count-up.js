let btn = document.querySelector('#submit-btn');
let additives = document.querySelector('#addition');
let value = 0;
let result = 0;
let array = [];

btn.addEventListener('click', () => {
    value = document.getElementById('input').value;
    additives.innerHTML = "";     // Clear additives

    for (i = 0; i < value; i++) {
        array[i] = i + 1;         // Fill array
        result = array[i];        // Calculate result
    }

    document.getElementById('output').innerHTML = result;
    displayAdditives(array);
})

function displayAdditives(array) {
    for (i = 0; i < array.length; i++) {
        switch (i) {
            case 0:
                additives.innerHTML += (i + 1);
                break;
            default:
                additives.innerHTML += " + " + (i + 1);
        }
    }
    additives.innerHTML += " =";
}