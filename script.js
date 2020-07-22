const currencyEl_1 = document.getElementById('currency-1')
const currencyEl_2 = document.getElementById('currency-2')
const amountEl_1 = document.getElementById('amount-1')
const amountEl_2 = document.getElementById('amount-2')
const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')


function calculate(){
    const currency_1 = currencyEl_1.value
    const currency_2 = currencyEl_2.value
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_1}`)
    .then(res => res.json())
    .then(data=> {
        const rate = data.rates[currency_2]
        rateEl.innerText = `1 ${currency_1} = ${rate} ${currency_2}`

        amountEl_2.value = (amountEl_1.value * rate).toFixed(2)
    })


}


currencyEl_1.addEventListener('change',calculate)
amountEl_1.addEventListener('input',calculate)
currencyEl_2.addEventListener('change',calculate)
amountEl_1.addEventListener('input',calculate)
swap.addEventListener('click',()=>{
    const temp = currencyEl_1.value
    currencyEl_1.value = currencyEl_2.value
    currencyEl_2.value = temp
    calculate()
})

calculate()
