const groceriesElem = document.getElementsByClassName('groceries')[0];
const trashElem = document.getElementById('trash');
const allItemsElem = document.getElementById('allItems');
const inputVal = document.getElementById('userInput')

trashElem.addEventListener('click', function () {
    allItemsElem.innerHTML = '';
});

inputVal.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        addItem();
    }
});

function addItem() {
    let h2 = document.createElement('h2');
    h2.innerHTML = '- ' + inputVal.value;

    h2.addEventListener('click', function () {
        h2.style.textDecoration = 'line-through';
    })

    allItemsElem.insertAdjacentElement('beforeend', h2);
    inputVal.value = '';
}


