let date = document.getElementById('date')
date.addEventListener('change', function (){
    let answer = document.getElementById('answer')
    answer.innerHTML = `${date.day.value} ${date.month.value} ${date.year.value}`
})

