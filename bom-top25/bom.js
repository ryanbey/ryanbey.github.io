const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', clickButton);

function clickButton() {
    let myInput = input.value;
    // reset input box value
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    if (myInput != '') {
        // create lsit item
        listItem.appendChild(listText);
        listText.textContent = myInput;
        // create delete button
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);
    }

    // delete button onclick
    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }

    // focus back on input box
    input.focus();
}