//  We create access variables with the getElementByIs method

let input = document.getElementById('input');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

/* 
By clicking the btn button, we create a paragraph element with the classlist property
that changes its appearance. This paragraph is appended to the output div while
the input field becomes empty.
*/

btn.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('class-style');
    paragraph.innerText = input.value; 

    input.value = '';
    
    output.appendChild(paragraph);

    /*
    By clicking on the paragraph element, the function creates
    a line through it and with doubleclick, it will disapear.
    */

        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = 'line-through';
        });
        paragraph.addEventListener('dblclick', function(){
            output.removeChild(paragraph);
        });
        
});
