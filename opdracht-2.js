// Opdracht 2.A ------------------------------------------
// 2.A.1 - Maak een array met verkochte tv's per model:
const soldPerModel = inventory.map((tv) => {
    return tv.sold;
});

// 2.A.2 - Tel de aantallen bij elkaar op:
let soldModels = 0;

for (let i = 0; i < soldPerModel.length; i++) {
    soldModels += soldPerModel[i];
}

// 2.A.3 - Schrijf de uitkomst in de console log:
console.log(soldModels);

// Opdracht 2.B ------------------------------------------
// 2.B.1 - Vind het juiste element:
const elementSoldTVs = document.getElementById("sold-televisions");

// 2.B.2 - Schrijf het aantal verkochte TV's in de HTML:
elementSoldTVs.innerHTML = `
    <h2>Aantal verkochte TV's:</h2>
    <b>${soldModels}</b>
`;

// Opdracht 2.C ------------------------------------------
// 2.C.1 - Maak een array met ingekochte TV's per model:
let purchasedPerModel = inventory.map((tv) => {
    return tv.originalStock;
});

// 2.C.2 - Tel de aantallen bij elkaar op:
let purchasedModels = 0;

for (let i = 0; i < purchasedPerModel.length; i++) {
    purchasedModels += purchasedPerModel[i];
}

// 2.C.3 - Schrijf de uitkomst in de console log:
console.log(purchasedModels);

// Opdracht 2.D ------------------------------------------
// 2.D.1 - Vind het juiste element:
const elementPurchasedTVs = document.getElementById("purchased-televisions");

// 2.D.2 - Schrijf het aantal ingekochte TV's in de HTML:
elementPurchasedTVs.innerHTML = `
    <h2>Aantal ingekochte TV's:</h2>
    <b>${purchasedModels}</b>
`;

// Opdracht 2.E ------------------------------------------
// 2.E.1 - Trek het aantal verkochte TV's af van het aantal ingekochte TV's:
const modelsToBeSold = purchasedModels - soldModels;

// 2.E.2 - Vind het juiste element:
const elementTVsToBeSold = document.getElementById("televisions-to-be-sold");

// 2.E.3 - Schrijf de uitkomst in de HTML:
elementTVsToBeSold.innerHTML = `
    <h2>Aantal TV's nog te verkopen:</h2>
    <b>${modelsToBeSold}</b>
`;