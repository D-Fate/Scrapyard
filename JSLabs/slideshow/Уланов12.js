// слайд-шоу
const MAX_TIMEOUT = 2147483647;
const MIN_TIMEOUT = 4;

let slideIndex = 0;
let period = 1000;
let slideShow = null;

function showSlides() {
    const pictures = [
        "https://static.wikia.nocookie.net/doctorwho/images/e/ee/Ninth_Doctor.jpg/revision/latest?cb=20200427123100&path-prefix=ru",
        "https://static.wikia.nocookie.net/doctorwho/images/2/2c/Tenth_Doctor.jpg/revision/latest?cb=20190402042219&path-prefix=ru",
        "https://static.wikia.nocookie.net/doctorwho/images/f/fe/Eleventh_Doctor.jpg/revision/latest?cb=20200525082807&path-prefix=ru",
        "https://static.wikia.nocookie.net/doctorwho/images/9/93/Twelfth_Doctor.jpg/revision/latest?cb=20200525083246&path-prefix=ru",
        "https://static.wikia.nocookie.net/doctorwho/images/f/f7/Thirteenth_Doctor.jpg/revision/latest?cb=20200525083418&path-prefix=ru"
    ];
    slideShow = setTimeout(showSlides, period);
    document.getElementById("slide").src = pictures[slideIndex];
    slideIndex++;
    if (slideIndex >= pictures.length) {
        slideIndex = 0;
    }
}

function changeSpeed(n) {
    if (slideShow == null) {
        showSlides();
        document.getElementById("stop").textContent = "стоп";
    } else if (n <= 0) {
        clearTimeout(slideShow);
        slideShow = null;
        document.getElementById("stop").textContent = "старт";
    } else {
        period = (MAX_TIMEOUT > period && period > MIN_TIMEOUT) ? period / n : 1000;
    }
}

// интернет-магазин
const products = [
    {name: "Монитор LG795 17”", price: 7345},
    {name: "Винчестер 60Гб", price: 3220},
    {name: "Принтер Canon i550", price: 4750},
    {name: "Видеокарта Radeon 8500 PRO", price: 2160},
    {name: "Сканер Mustek 1200SP", price: 2300}
];

function drawStore() {
    checkboxes = "";
    let i = 0;
    products.forEach((p) => {
        checkboxes += `<input type="checkbox" id="p${i++}">${p.name} – ${p.price} руб.<br>`
    });
    document.getElementById("store").innerHTML = checkboxes;
}

function getTotalCost() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        if (document.getElementById(`p${i}`).checked) {
            total += products[i].price;
        }
    }
    document.getElementById("totalCost").innerHTML = `Итого: ${total} руб.`;
}
