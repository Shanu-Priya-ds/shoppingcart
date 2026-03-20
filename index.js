//cache the html elements
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");
let unOrderlist = document.getElementById("unOrderlist");
let itemToBeAdded = document.getElementById("itemToBeAdded");
let cartItemCount = document.getElementById("cartItemCount");
let searchBtn = document.getElementById("searchBtn");
let searchTxt = document.getElementById("searchTxt");

/**
 * Array manipulation
 */
let shoppingList = [];
let searchResult = [];

function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    }
}

function removeItem(item) {
    shoppingList.pop(item);
}

function removeLastItem() {
    shoppingList.pop();
}

function displayShoppingList() {
    for (let item of shoppingList) {
        console.log(item);
    }
}

function filterItems(searchItem) {
    return shoppingList.filter((value) => {
        if (value.toLowerCase().includes(searchItem.toLowerCase()))
            return true;
        else return false;
    });
}

/**
 * Add/update HTML elements
 */


//add Button eventListener
addBtn.addEventListener("click", function () {
    // add the item to the array 
    addItem(itemToBeAdded.value);

    console.log(shoppingList);
    createList(shoppingList);

    //clear the text field
    itemToBeAdded.value = "";
});

searchBtn.addEventListener("click", () => {
    searchResult = filterItems(searchTxt.value);
    createList(searchResult);
});
//remove Button eventListener
// removeBtn.addEventListener('click', () => {
//     shoppingList.pop();
//     createList();
// });

//create List item in UI
function createList(list) {
    console.log(list);
    unOrderlist.innerHTML = "";
    //iterate each element and create a HTML list element and attach to the ul element
    list.forEach((arrayItem) => {
        let listElement = document.createElement("li");
        listElement.textContent = arrayItem;
        listElement.style = "display:flex; flex-direction:row;justify-content:space-between;align-self:flex-start;"
        let deleteIcon = document.createElement("img");
        deleteIcon.src = "./images/cross.png";
        deleteIcon.style = "width:3%;";

        deleteIcon.addEventListener('click', () => {
            console.log(arrayItem);
            list.pop(arrayItem);
            createList(list);
        });
        listElement.appendChild(deleteIcon);
        unOrderlist.appendChild(listElement);
    });
    cartItemCount.innerText = shoppingList.length;

}

//Tescases
// addItem("fruits");
// addItem("milk");
// addItem("banana");
// addItem("Fridge");
// //displayShoppingList();

// // removeLastItem();
// //displayShoppingList();
// addItem("fruits");
// displayShoppingList();

// let filterdValue = filterItems("fr");
// console.log(filterdValue);