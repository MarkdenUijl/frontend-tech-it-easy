// Opdracht 4.A ------------------------------------------
function getTVTitle(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

// Opdracht 4.B ------------------------------------------
function formatPrice(price) {
    return `€${price},-`;
}

// Opdracht 4.C ------------------------------------------
function getTVScreenSizes(tv) {
    let sizeString = "";

    for (let i = 0; i < tv.availableSizes.length; i++) {
        const screenSize = tv.availableSizes[i];

        sizeString += `${screenSize} inch (${Math.round(screenSize * 2.54)} cm)`;

        if(i !== (tv.availableSizes.length - 1)) {
            sizeString += " | ";
        }
    }

    return sizeString;
}

// Opdracht 4.D ------------------------------------------
const tvInformationList = document.getElementById("television-information-list");

function showTelevisionInformation(tv) {
    tvInformationList.innerHTML += `
        <li>
            <b>${getTVTitle(tv)}</b>
            <i>${formatPrice(tv.price)}</i>
            <i>${getTVScreenSizes(tv)}</i>
        </li>
    `
}

showTelevisionInformation(inventory[4]);

// Opdracht 4.E ------------------------------------------
function showInventoryInList(stock) {
    stock.map((item) => {   //Persoonlijk zou ik in laats van de .map methode hier een .forEach methode willen gebruiken.
        showTelevisionInformation(item);
    });
}

showInventoryInList(inventory)

console.log(getTVTitle(inventory[4]));
console.log(formatPrice(379));
console.log(getTVScreenSizes(inventory[4]));