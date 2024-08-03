const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const inputAmount = document.getElementById("originalCurrencyAmount");
const exchangeRate = document.getElementById("exchangeRate");
const exchangeCurrency = document.getElementById("exchange");
const outputFrom = document.getElementById("from");
const outputTo = document.getElementById("to");

let toAmount = 0;
function caclulate(){
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrencyValue}`)
        .then(res => res.json())
        .then(res =>{
            const rates = res.rates[toCurrencyValue];
            exchangeRate.value = rates;
            toAmount = (inputAmount.value*rates).toFixed(3);
            outputFrom.textContent = inputAmount.value;
            outputTo.textContent = toAmount;
            document.getElementById("outputText").style.display = "block";
        })
}

exchangeCurrency.addEventListener("click",()=>{
    [fromCurrency.value,toCurrency.value] = [toCurrency.value,fromCurrency.value];
    caclulate();
})

document.getElementById("exchangeButton").addEventListener("click",caclulate);