"use strict";
const step = document.querySelector(".step");
const time = document.querySelector(".time");
const incr = document.querySelector(".increment");
const decr = document.querySelector(".decrement");
const collec = document.querySelector(".collector");
const checkbox = document.querySelector(".inCheckbox");
const x = document.querySelector(".x");
let counter = 0;
let timeCounter = 0;
incr.addEventListener("click", function () {
    if (step.value.length > 0) {
        if (checkbox.checked) {
            if (!isNaN(+time.value) && +time.value > 0) {
                let setInter = setInterval(function () {
                    timeCounter++;
                    if (timeCounter == +time.value) {
                        counter += +step.value;
                        collec.innerText = counter;
                        time.value = "";
                        step.value = "";
                    }
                }, 1000);
                x.addEventListener("click", function () { stopSetInterval(setInter); });
            }
            else {
                alert("Time inputga son kiritilmadi");
            }
        }
        else {
            counter += +step.value;
            collec.innerText = counter;
        }
    }
    else {
        alert("step ga son kiritilmadi");
    }
});
decr.addEventListener("click", function () {
    if (step.value.length > 0) {
        if (checkbox.checked) {
            if (!isNaN(+time.value) && +time.value > 0) {
                let setInter = setInterval(function () {
                    timeCounter++;
                    if (timeCounter == +time.value) {
                        counter -= +step.value;
                        collec.innerText = counter;
                        time.value = "";
                        step.value = "";
                    }
                }, 1000);
                x.addEventListener("click", function () { stopSetInterval(setInter); });
            }
            else {
                alert("Time inputga son kiritilmadi");
            }
        }
        else {
            counter -= +step.value;
            collec.innerText = counter;
        }
    }
    else {
        alert("step ga son kiritilmadi");
    }
});
function stopSetInterval(inter) {
    clearInterval(inter);
    time.value = "";
    step.value = "";
    checkbox.checked = false;
}
//# sourceMappingURL=main.js.map