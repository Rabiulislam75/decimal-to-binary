const result = document.getElementById('result')
const submit = document.getElementById('submit')

function binary(e){
    e.preventDefault()
    let num = document.getElementById('number').value;

    if(num === ''){
        alert('Please Provide a number!')
    }else if(num < 0){
        alert("Please Provide a Positive number")
    }
    else{
        result.style.visibility = 'visible'
    }

    //converting
    let binaryNumber = Number(num).toString(2)
    result.innerHTML =binaryNumber

}
submit.addEventListener('click',binary)