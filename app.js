const adviceBtn = document.querySelector("#adviceButtun");
const advice = document.querySelector("#advice");
const adviceNumer = document.querySelector("#advice-id");

adviceBtn.addEventListener('click', async () => {
    try {
        const response = await fetch(('https://api.adviceslip.com/advice'))
        const data = await response.json();

        advice.textContent = data.slip.advice;
        adviceNumer.textContent ="Advice : " + data.slip.id;

    } catch (error) {
        console.error("error fetching advice", error)
        advice.textContent = "sory something went wrong";
    }

});
