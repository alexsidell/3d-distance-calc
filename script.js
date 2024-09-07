let formEl = document.getElementById("my-form")
formEl.addEventListener("submit", calcDistance)

function calcDistance(e){
    e.preventDefault()

    let a = document.getElementById('input-a').value
    let b = document.getElementById('input-b').value
    let c = document.getElementById('input-c').value
    let unit = document.getElementById('unit-select')
    let output = document.getElementById('output')

    let d = Math.sqrt(a*a+b*b)
    let x = Math.sqrt(c*c+d*d)

    output.innerHTML = `Total distance is ${x.toFixed(1)} ${unit.value}`
}