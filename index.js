let total = 0

document.querySelector('#add').addEventListener('click',addition)
document.querySelector('#subtract').addEventListener('click',subtraction)
document.querySelector('#multiply').addEventListener('click',multiplication)
document.querySelector('#divide').addEventListener('click',division)

function addition() {
    total = 0
    document.querySelector('#placetheResult').innerText= total
}


function subtraction() {
    total = total+3
    document.querySelector('#placetheResult').innerText= total
}

function multiplication() {
    total = total+9
    document.querySelector('#placetheResult').innerText= total
}

function division() {
    total = total-2
    document.querySelector('#placetheResult').innerText= total
}

