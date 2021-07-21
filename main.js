// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// ----------------------------------------------------------
// FUNCTIES
// ----------------------------------------------------------
// Alle logs van de functies staan helemaal onderaan dit programma


// 1A OPDRACHT : Schrijf een functie die berekent hoeveel exemplaren er nog verkocht moeten worden. Maak dit aantal rood

// Telt hoeveel tv's er in totaal nog verkocht moeten worden
function checkNumberToSell(inventory) {
    let sum = 0;

    inventory.map((product) => {
        sum += (product.originalStock - product.sold);
    });

    return sum;
}

const numberToSell = checkNumberToSell(inventory);


// 1B OPDRACHT : Geef het aantal exemplaren dat nog verkocht moet worden in het rood weer op de pagina

// Koppel de functie aan een id en class in HTML en maak een element aan
const numbersToSellContainer = document.getElementById('numbers-to-sell');
const numbersToSellElement = document.createElement('p');
numbersToSellElement.textContent = numberToSell.toString();
numbersToSellElement.setAttribute('class', 'numbers-to-sell');
numbersToSellContainer.appendChild(numbersToSellElement);

// -------------------------------------------------------------------

// 2A OPDRACHT : Gebruik een array-methode om een array te maken met alle tv-type namen.

// Dit was de originele functie, maar is vervangen voor onderstaande functie die de uitkomsten in een lijst uitgeeft
// Deze functie geeft alle tv-types terug
// const collectTvTypes = inventory.map((product) => { return tvTypes });

// Extra toegevoegd:
// Deze functie geeft alle gevonden tv types in een 'unordered list' als 'list items' weer (met een andere methode)
window.onload = function () {

    const ul = document.querySelectorAll('ul')[0];

    const typeList = inventory.map(product => {
        const productType = document.createElement('li');
        productType.innerHTML = `${product.type}`;
        return productType;
    })

    for (let i = 0; i < typeList.length; i++) {
        ul.appendChild(typeList[i]);
    }
}


// 2B OPDRACHT : Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn

// Geeft alle uitverkochte tv's weer
const allSoldOutTvs = inventory.filter((product) => {
    return (product.originalStock - product.sold) === 0;
})


// 2C OPDRACHT : Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken

// Geeft alle tv's met AmbiLight terug
const selectTvWithAmbiLight = inventory.filter((product) => {
    return product.options.ambiLight === true;
});


// 2D OPDRACHT : Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.

// Sorteert de tv's op prijs van laag naar hoog
const selectPrice = inventory.sort((a, b) => a.price - b.price);


// -------------------------------------------------------------------

// 3A OPDRACHT: Bereken de totale opbrengst van de tv als alle exemplaren verkocht zouden worden, maak dit bedrag blauw

// Berekent uit wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen
function calculateProfitOfAllTvs(inventory) {
    let totalPrice = 0;

    inventory.map((product) => {
        totalPrice += (product.price * product.originalStock);
    });

    return totalPrice;
}

const totalProfit = calculateProfitOfAllTvs(inventory);

// Koppel de functie aan een id en class in HTML en maak een element aan
const calculateFullProfitContainer = document.getElementById('calculate-profit');
const calculateFullProfitElement = document.createElement('p');
calculateFullProfitElement.textContent = `€${totalProfit},-`;
calculateFullProfitElement.setAttribute('class', 'calculate-profit');
calculateFullProfitContainer.appendChild(calculateFullProfitElement);


// 3B OPDRACHT: Bereken wat de huidige opbrengst is van de verkochte tv's, maak dit bedrag groen

// Berekent uit wat de huidige opbrengst van de verkochte tv's
function currentProfitTvs(inventory) {
    let price = 0;

    inventory.map((product) => {
        price += (product.price * product.sold);
    });

    return price;
}

const calculateCurrentProfit = currentProfitTvs(inventory);

// Koppel de functie aan een id en class in HTML en maak een element aan
const calculateCurrentProfitContainer = document.getElementById('calculate-current-profit');
const calculateCurrentProfitElement = document.createElement('p');
calculateCurrentProfitElement.textContent = `€${calculateCurrentProfit},-`;
calculateCurrentProfitElement.setAttribute('class', 'calculate-current-profit');
calculateCurrentProfitContainer.appendChild(calculateCurrentProfitElement);


// -------------------------------------------------------------------

// 4 OPDRACHT: Geef twee type-namen weer op de pagina

// Maak een element van 2 willekeurige tv's uit de lijst en geef deze weer als 'list-item'
const listOfTvs = document.getElementById('two-tv-types');

// 1ste tv
const tvNumberOne = document.createElement('li');
tvNumberOne.textContent = inventory[2].type;
listOfTvs.appendChild(tvNumberOne);

// 2e tv
const tvNumberTwo = document.createElement('li');
tvNumberTwo.textContent = inventory[5].type;
listOfTvs.appendChild(tvNumberTwo);


// -------------------------------------------------------------------

// 5A OPDRACHT: Maak een herbruikbare functie die verwacht 1 tv-object als parameter en de naam op de volgende manier
// samenvoegt: [merk] [type] - [naam]. De functie moet herbruikbaar zijn

// Maak functie en return het merk, type en de naam
function makeTvName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}


// 5B OPDRACHT: Maak een herbruikbare functie die ervoor zorgt dat de prijs van een tv netjes geformat wordt. De functie
// moet een parameter verwachten (zoals 379) en daar de volgende string van maken: €379,-.

function makeTvPrice(tv) {
    return `€${tv.price},-`;
}


// 5C OPDRACHT: Maak een herbruikbare functie die een string gegenereerd voor alle beschikbare schermgroottes van één tv in
// zowel inches als cm. De functie die één screen-sizes array en groottes op de volgende manier samenvoegt:
// schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.

function createScreenSizesString(screenSizes) {
    let showScreenSizes = '';

    for (let i = 0; i < screenSizes.length; i++) {

        const sizeInches = screenSizes[i];
        const sizeCm = screenSizes[i] * 2.54;

        // Maak een string
        showScreenSizes = showScreenSizes + `${sizeInches} inch (${sizeCm} cm)`;

        // Voeg | toe tot het laatste scherm
        if (i < screenSizes.length - 1) {
            showScreenSizes = `${showScreenSizes} | `;
        }
    }

    return showScreenSizes;
}


// 5D OPDRACHT: Geef 1 van de twee tv's op de pagina weer, maak gebruik van de functies van opdracht 5A, 5B, 5C

const tvContainer = document.getElementById('one-tv-type');

const tvOneName = document.createElement('h2');
tvOneName.textContent = makeTvName(inventory[6]);
tvContainer.appendChild(tvOneName);

const tvOnePrice = document.createElement('h3');
tvOnePrice.textContent = makeTvPrice(inventory[6])
tvContainer.appendChild(tvOnePrice);

const tvSizes = document.createElement('p');
tvSizes.textContent = createScreenSizesString(inventory[6].availableSizes);
tvContainer.appendChild(tvSizes);

// 5E OPDRACHT: Schrijf een herbruikbare functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Deze
// "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

function dislayTvList(tvs) {
    const tvList = document.getElementById('tv-list');

    tvs.map((tv) => {
        const tvContainer = document.createElement('li');
        tvContainer.setAttribute('class', 'tv-list-item');

        const tvName = document.createElement('h2');
        tvName.textContent = makeTvName(tv);
        tvContainer.appendChild(tvName);

        const tvPrice = document.createElement('h3');
        tvPrice.textContent = makeTvPrice(tv);
        tvContainer.appendChild(tvPrice);

        const tvSizes = document.createElement('p');
        tvSizes.textContent = createScreenSizesString(tv.availableSizes);
        tvContainer.appendChild(tvSizes);

        return tvList.appendChild(tvContainer);
    });
}


// ----------------------------------------------------------

// BONUSOPDRACHT : Maak 3 knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en uitverkochte exemplaren.
// Gebruik de code je opdracht 2B, 2C en 2D gemaakt hebt en schrijf dit om naar functies zodat ze werken als erop
// geklikt wordt. Log bij de druk op de knop de uitkomsten van de functies in de console.


const soldOutButton = document.getElementById('sold-out-btn');
const ambilightButton = document.getElementById('ambilight-btn');
const sortButton = document.getElementById('sort-btn');

// 2 achter de naam gezet om dubbele namen te voorkomen
// Geeft alle uitverkochte tv's weer
function allSoldOutTvs2() {
    const soldOut = inventory.filter((product) => {
        return (product.originalStock - product.sold) === 0;
    })
    console.log(soldOut)
}

// 2 achter de naam gezet om dubbele namen te voorkomen
// Geeft alle tv's met AmbiLight terug
function selectTvWithAmbiLight2() {
    const tvWithAmbi = inventory.filter((product) => {
        return product.options.ambiLight === true;
    });
    console.log(tvWithAmbi)
}

// 2 achter de naam gezet om dubbele namen te voorkomen
// Sorteert de tv's op prijs van laag naar hoog
function sortPrice2() {
    const  sortPrice = inventory.sort((a, b) => a.price - b.price);
    console.log(sortPrice);
    return sortPrice;
}


// Functies zijn zichtbaar bij opdracht 2
// 2B: allSoldOutTvs
soldOutButton.addEventListener('click', allSoldOutTvs2);
// 2C: selectTvWithAmbiLight
ambilightButton.addEventListener('click', selectTvWithAmbiLight2);
// 2D: selectPrice
sortButton.addEventListener('click', sortPrice2);


// ----------------------------------------------------------
// LOGS
// ----------------------------------------------------------

// 1A
console.log("\nAantal producten dat nog verkocht moet worden: " + numberToSell);

// 2A
// console.log("\nDit is een lijst van alle tv-types: " + collectTvTypes);

// 2B
console.log("\nDeze tv's zijn helemaal uitverkocht");
console.log(allSoldOutTvs);

// 2C
console.log("\nDit zijn de tv's met AmbiLight functie: ");
console.log(selectTvWithAmbiLight);

// 2D
console.log("\nDit zijn de tv's gesorteerd op de prijs van laag naar hoog: ");
console.log(selectPrice);

// 3A
console.log("\nDit is de opbrengst prijs van alle ingekochte tv's: €" + totalProfit);

// 3B
console.log("\nDit is de opbrengst van de huidige verkochte tv's: €" + calculateCurrentProfit);


// ----------------------------------------------------------------------------------------



