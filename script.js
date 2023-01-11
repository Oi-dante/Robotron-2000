
const ctrl = document.querySelectorAll("[data-controle]")

ctrl.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.dataset.controle, event.target.parentNode)
    })
}) 


function manipulateData(assemble, ctrl) {

    const control = ctrl.querySelector("[data-counter]");
    if(assemble === "-") {
        control.value = parseInt(control.value) - 1
    } else {
        control.value = parseInt(control.value) + 1
    }

}