// Opdracht 1.A ------------------------------------------
const tvNames = inventory.map((tv) => {
    return `${tv.brand} ${tv.name} ${tv.type}`;
});

console.log(tvNames);

// Opdracht 1.B ------------------------------------------
const soldOutTvs = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
});

console.log(soldOutTvs);

// Opdracht 1.C --------------------------------------------
const ambiLightTvs = inventory.filter((tv) => {
    return tv.options.ambiLight;
});

console.log(ambiLightTvs);

// Opdracht 1.D --------------------------------------------
inventory.sort((a, b) => {
    return a.price - b.price;
});

console.log(inventory);