
const step:HTMLInputElement = document.querySelector(".step")!;
const time:HTMLInputElement = document.querySelector(".time")!;
const incr:HTMLDivElement = document.querySelector(".increment")!;
const decr:HTMLDivElement = document.querySelector(".decrement")!;
const collec:HTMLDivElement = document.querySelector(".collector")!;
const checkbox:HTMLInputElement = document.querySelector(".inCheckbox")!;
const x:HTMLDivElement = document.querySelector(".x")!;

let counter:any = 0;
let timeCounter:number = 0;


incr.addEventListener("click", function():void {
    if (step.value.length > 0) {
        if (checkbox.checked) {
            if (!isNaN(+time.value) && +time.value > 0) {
                let setInter = setInterval(function() {
                    timeCounter++
                    if (timeCounter == +time.value) {
                        counter += +step.value
                        collec.innerText = counter
                        time.value = ""
                        step.value = ""
                    }
                }, 1000)
                x.addEventListener("click", function() {stopSetInterval(setInter)})
            } else {
                alert("Time inputga son kiritilmadi")
            }
        } else {
            counter += +step.value
            collec.innerText = counter
        }
    } else {
        alert("step ga son kiritilmadi")
    }
})


decr.addEventListener("click", function():void {
    if (step.value.length > 0) {
        if (checkbox.checked) {
            if (!isNaN(+time.value) && +time.value > 0) {
                let setInter = setInterval(function() {
                    timeCounter++
                    if (timeCounter == +time.value) {
                        counter -= +step.value
                        collec.innerText = counter
                        time.value = ""
                        step.value = ""
                    }
                }, 1000)
                x.addEventListener("click", function() {stopSetInterval(setInter)})
            } else {
                alert("Time inputga son kiritilmadi")
            }
        } else {
            counter -= +step.value
            collec.innerText = counter
        }
    } else {
        alert("step ga son kiritilmadi")
    }
})


function stopSetInterval(inter:any):void {
    clearInterval(inter)
    time.value = ""
    step.value = ""
    checkbox.checked = false
}

