
const ctrl = document.querySelectorAll("[data-controle]")
const stats = document.querySelectorAll("[data-stats]")


ctrl.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulateData(event.target.dataset.controle, event.target.parentNode)
        attStats(event.target.dataset.parts, event.target.dataset.controle)
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

function attStats(control, assemble) {

    
    stats.forEach( (element)=> {
        if (assemble === "-") {
            element.textContent = parseInt(element.textContent) - parts[control] [element.dataset.stats]
        } else{
            element.textContent = parseInt(element.textContent) + parts[control] [element.dataset.stats]
        }
    })
}