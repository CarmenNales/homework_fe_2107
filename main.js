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

// 1A : Schrijf een functie die berekent hoeveel exemplaren er nog verkocht moeten worden.
// Telt hoeveel tv's er in totaal nog verkocht moeten worden
function checkNumberToSell(inventory) {
    let sum = 0;

    inventory.map((product) => {
        sum += (product.originalStock - product.sold)
    });

    return sum;
}

const numberToSell = checkNumberToSell(inventory);


// 1B : Geef het aantal exemplaren dat nog verkocht moet worden in het rood weer op de pagina
const numbersToSellContainer = document.getElementById('numbers-to-sell');
const numbersToSellElement = document.createElement('p');
numbersToSellElement.textContent = numberToSell.toString();
numbersToSellElement.setAttribute('class', 'numbers-to-sell');
numbersToSellContainer.appendChild(numbersToSellElement);

// -------------------------------------------------------------------

// 2A : Gebruik een array-methode om een array te maken met alle tv-type namen.
// Geeft alle tv-types terug
// const collectTvTypes = inventory.map((product) => { return tvTypes });


window.onload = function () {

    const ul = document.querySelectorAll('ul')[0]
    const typeList = inventory.map(product => {
        const productType = document.createElement('li')
        productType.innerHTML = `${product.type}`
        return productType;
    })

    for (let i = 0; i < typeList.length; i++) {
        ul.appendChild(typeList[i])
    }
}


// 2B : Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
// Geeft alle uitverkochte tv's weer

const allSoldOutTvs = inventory.filter((product) => {
    return (product.originalStock - product.sold) === 0;
})


// 2C : Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken
// Geeft alle tv's met AmbiLight terug

const selectTvWithAmbiLight = inventory.filter((product) => {
    return product.options.ambiLight === true;
});


// 2D : Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert.
// Sorteert de tv's op prijs van laag naar hoog

const selectPrice = inventory.sort((a, b) => a.price - b.price);

// -------------------------------------------------------------------

// 3A
// Berekent uit wat de totale opbrengst is, als we alle exemplaren van ieder type zouden verkopen

function calculateProfitOfAllTvs(inventory) {
    let totalPrice = 0;

    inventory.map((product) => {
        totalPrice += (product.price * product.originalStock);
    });

    return totalPrice;
}

const totalProfit = calculateProfitOfAllTvs(inventory);


const calculateFullProfitContainer = document.getElementById('calculate-profit');
const calculateFullProfitElement = document.createElement('p');
calculateFullProfitElement.textContent = `€${totalProfit},-`;
calculateFullProfitElement.setAttribute('class', 'calculate-profit');
calculateFullProfitContainer.appendChild(calculateFullProfitElement)


// 3B
// Berekent uit wat de huidige opbrengst van de verkochte tv's

function currentProfitTvs(inventory) {
    let price = 0;

    inventory.map((product) => {
        price += (product.price * product.sold);
    });

    return price;
}

const calculateCurrentProfit = currentProfitTvs(inventory);

const calculateCurrentProfitContainer = document.getElementById('calculate-current-profit');
const calculateCurrentProfitElement = document.createElement('p');
calculateCurrentProfitElement.textContent = `€${calculateCurrentProfit},-`;
calculateCurrentProfitElement.setAttribute('class', 'calculate-current-profit');
calculateCurrentProfitContainer.appendChild(calculateCurrentProfitElement)


// -------------------------------------------------------------------




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



