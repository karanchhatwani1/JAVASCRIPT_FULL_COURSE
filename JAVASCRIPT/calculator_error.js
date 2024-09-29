/*function checkNumberSign(){
    const number = document.querySelector('.number');
    let cost = Number(number.value);

    if(cost < 0){
        document.querySelector('.msg').innerHtml = 'Invalid number';
    }
}*/

function checkNumberSign() {
    const inputElement = document.querySelector('.number');
    let cost = Number(inputElement.value);

    if (cost < 0) {
      document.querySelector('.msg')
        .innerHTML = 'Error: cost cannot be less than $0';
    }
}

