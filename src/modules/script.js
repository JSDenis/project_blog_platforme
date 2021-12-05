function hidePlaceholder(event) {
    let placeholder = event.target.children[0];
    if (placeholder.classList.contains('fix-placeholder') || placeholder.classList.contains('fix-placeholder-content')) {
        placeholder.hidden = true;
    }
}

//Error write title

function showPlaceholder(event) {
    let placeholder = event.target.children[0];
    if (event.target.innerText === '') {  // NEW
        placeholder.hidden = false;
    }
}

function isEmptyField(event, titlePlaceholder) {  // NEW FUNCTION
    if (event.key === 'Backspace') {
        console.log(event.target.innerText === '');
    }
    if (event.key === 'Backspace' && event.target.innerText === '') {
        event.target.innerHTML = `<span class="fix-placeholder">${titlePlaceholder}</span>`;
        event.preventDefault();
        return false;
    }
}

function editText(makeClass) {
    let range = window.getSelection().getRangeAt(0);
    let newSpan = document.createElement('span');
    newSpan.classList.add(makeClass);
    newSpan.appendChild(range.extractContents());
    range.insertNode(newSpan);
}


export {hidePlaceholder, showPlaceholder, isEmptyField, editText}