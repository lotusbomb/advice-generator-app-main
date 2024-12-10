
const advice = document.querySelector('.title')
const body = document.querySelector('.text')
const dice = document.querySelector('.box')


const FetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const json = await response.json()
    console.log(json)
    advice.innerText = `ADVICE #${json.slip.id}`
    body.innerText = json.slip.advice
};


window.addEventListener('DOMContentLoaded', FetchData)
dice.addEventListener('click', FetchData)