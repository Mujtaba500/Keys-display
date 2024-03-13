window.addEventListener('keydown', keyDisplay)

function yoyo(){
    alert('yo')
}

function keyDisplay(e) {
    let container = document.querySelector('.container');

    container.innerHTML = `
    <div>
    <small>e.key</small>
    <div class="key">
        ${e.key}
     </div>
     </div>
    
    <div>
    <small>e.keyCode</small>
    <div class="key">
        ${e.keyCode}
    </div>
    </div>
    
    <div>
    <small>e.code</small>
    <div class="key">
        ${e.code}
    </div>
    </div>
    `
}


