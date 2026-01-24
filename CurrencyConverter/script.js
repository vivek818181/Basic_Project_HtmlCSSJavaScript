const currencyFirstEl = document.getElementById("Currency-first");
const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("Currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/80c8c5f864a010d1581c8bac/latest/${currencyFirstEl.value}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currencySecondEl.value];

            exchangeRateEl.innerText =
                `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

            worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
        })
        .catch(err => {
            exchangeRateEl.innerText = "Error fetching exchange rate";
            console.error(err);
        });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);

// Auto run on load
updateRate();



