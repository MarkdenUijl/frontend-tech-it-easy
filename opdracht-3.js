// Opdracht 3.A ------------------------------------------
// const brands = inventory.map((tv) => {
//     return tv.brand;
// });
//
// const list = document.getElementById("brand-list")
// brands.map((entry) => {
//     list.innerHTML += `
//         <li>${entry}</li>
//     `
// });

// Opdracht 3.B ------------------------------------------
function showListOfBrands(tvList) {
    const brands = tvList.map((tv) => {
        return tv.brand;
    });

    const brandList = document.getElementById("brand-list")

    brandList.innerHTML = `
        <h2>Aanwezige merken:</h2>
    `

    brands.map((brand) => {
        brandList.innerHTML += `
        <li>${brand}</li>`
    });
}

showListOfBrands(inventory)