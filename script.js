const btn5 = document.getElementById("5percent");

btn5.addEventListener("click", () => {
    const value = document.getElementById("input-text").value;

    let test = value * (5 / 100);
    let result = test.toFixed(0);
    let final = document.getElementById("total-amount");

    final.innerHTML = `${result}$`;
})

const btn10 = document.getElementById("10percent");

btn10.addEventListener("click", () => {
    const value = document.getElementById("input-text").value;

    let test1 = value / 10;
    let result2 = test1.toFixed(0);
    let final1 = document.getElementById("total-amount");

    final1.innerHTML = `${result2}$`;
})

const btn15 = document.getElementById("15percent");

btn15.addEventListener("click", () => {
    const value = document.getElementById("input-text").value;

    let test2 = value * (15 / 100);
    let result3 = test2.toFixed(0);
    let final2 = document.getElementById("total-amount");

    final2.innerHTML = `${result3}$`;
})


const btn25 = document.getElementById("25percent");

btn25.addEventListener("click", () => {
    const value = document.getElementById("input-text").value;

    let test3 = value * (25 / 100);
    let result4 = test3.toFixed(0);
    let final3 = document.getElementById("total-amount");

    final3.innerHTML = `${result4}$`;
})

const btn50 = document.getElementById("50percent");

btn50.addEventListener("click", () => {
    const value = document.getElementById("input-text").value;

    let test4 = value * (50 / 100);
    let result5 = test4.toFixed(0);
    let final4 = document.getElementById("total-amount");

    final4.innerHTML = `${result5}$`;
})

const btn70 = document.getElementById("70percent");

btn70.addEventListener("click", () => {
    const value = document.getElementById("input-text").value;
    const test5 = value * (70 / 100);
    const result6 = test5.toFixed(0);
    let final5 = document.getElementById("total-amount");


    final5.innerHTML = `${result6}$`;
})
