let namee = 'олег'
let surname = 'олегович'
let second_surname = 'олегович'

console.log(namee + surname + second_surname)

let date = document.getElementById('date')
date.addEventListener('change', function (){
    console.log('нажал')
    console.log(date.day.value)
    console.log(date.month.value)
    console.log(date.year.value)
})