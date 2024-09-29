let add = function(){
    console.log(2 + 3);
}

add();
add();

function runTwice(fun){
    fun();
    fun();
}

runTwice(function(){
    console.log('12b');
});

runTwice(add);

function updateButton(){
    let start = document.querySelector('.start');

    setTimeout(function(){
        start.innerHTML = 'Finished';
    }, 1000);

    start.innerHTML = 'Loading';
}

let timeID;

function addToCart(){
    let cart = document.querySelector('.added');
    clearTimeout(timeID);

    cart.innerHTML = 'Added';
    timeID = setTimeout(function(){
        cart.innerHTML = '';
    }, 3000);
}

let notifyCount = 0;

setInterval(function(){
    if(document.title === 'App'){
        document.title = `(${notifyCount}) New messages`
    }
    else{
        document.title = 'App';
    }
}, 1000);

function update_notify_add(){
    notifyCount++;
}

function update_notify_remove(){
    notifyCount--;
}