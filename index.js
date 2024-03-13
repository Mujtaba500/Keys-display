// window.addEventListener('keydown', keyDisplay)

// function yoyo(){
//     alert('yo')
// }

// function keyDisplay(e) {
//     let container = document.querySelector('.container');

//     container.innerHTML = `
//     <div>
//     <small>e.key</small>
//     <div class="key">
//         ${e.key}
//      </div>
//      </div>
    
//     <div>
//     <small>e.keyCode</small>
//     <div class="key">
//         ${e.keyCode}
//     </div>
//     </div>
    
//     <div>
//     <small>e.code</small>
//     <div class="key">
//         ${e.code}
//     </div>
//     </div>
//     `
// }

//  A better way to do the same thing

window.addEventListener('keydown', keyDisplay)

function keyDisplay(e) {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    const keys = {
        'e.key': e.key === ' ' ? 'Space': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code

    }

    for(let key in keys){
        const div1 = document.createElement('div');
        const div2 = document.createElement('div')
         div1.className = 'key';  
        const small = document.createElement('small')
         const keyText = document.createTextNode(key);
         const keyValue = document.createTextNode(keys[key])

         small.appendChild(keyText)
         div1.appendChild(keyValue)
         div2.appendChild(small)
         div2.appendChild(div1)
        container.appendChild(div2)
    }

}
