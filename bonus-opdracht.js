function resetList(list) {
    list.innerHTML = "";
}

function sortByPrice() {
    resetList(tvInformationList);

    inventory.sort((a, b) => {
        return a.price - b.price;
    });

    showInventoryInList(inventory);
}

function sortByAmbiLight() {
    resetList(tvInformationList);

    const filteredList = inventory.filter((tv) => {
        return tv.options.ambiLight;
    });

    showInventoryInList(filteredList);
}

function sortSoldOut() {
    resetList(tvInformationList);

    const filteredList = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;
    });

    showInventoryInList(filteredList);
}

const btnSortByPrice = document.getElementById("button-price");
btnSortByPrice.addEventListener("click", sortByPrice);

const btnSortByAmbilight = document.getElementById("button-ambilight");
btnSortByAmbilight.addEventListener("click", sortByAmbiLight);

const btnSortBySoldOut = document.getElementById("button-sold-out");
btnSortBySoldOut.addEventListener("click", sortSoldOut);