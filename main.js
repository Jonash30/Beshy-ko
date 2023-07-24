const messageInput = document.querySelector('.message-input');
const messageBox = document.querySelector('.message-box');
const enterBrn = document.querySelector('.enter-btn');
const svgColor = document.querySelector('.enter-btn svg path');
const messageOutput = document.querySelector('.message-output')
const copy = document.querySelector('.copy-message');


enterBrn.addEventListener('click', () => {
    const message = messageInput.value.trim();

    const words = message.split(' ');
    const wordsWithIcon = [];
    
    words.forEach(word => {
        wordsWithIcon.push(word);
        wordsWithIcon.push('&#129336;');
    })

    const messageWithIcon = wordsWithIcon.join(' ');
    messageOutput.innerHTML = messageWithIcon;
})

messageInput.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        const message = messageInput.value.trim();

        const words = message.split(' ');
        const wordsWithIcon = [];
        
        words.forEach(word => {
            wordsWithIcon.push(word);
            wordsWithIcon.push('&#129336;');
        })
        const messageWithIcon = wordsWithIcon.join(' ');
        messageOutput.innerHTML = messageWithIcon;
    }
})

messageInput.addEventListener('click', () => {
    messageBox.style.border = '2px solid rgba(30, 124, 255, .7)';
})

messageInput.addEventListener('input', () => {
    enterBrn.style.backgroundColor = 'rgb(25, 195, 125)';
    svgColor.setAttribute('fill', 'white')

    if(messageInput.value.trim() === ''){
        enterBrn.style.backgroundColor = '';
        svgColor.setAttribute('fill', '#aeaec2')
    }
})

document.addEventListener('click', (event) => {
    if(!messageBox.contains(event.target)){
        messageBox.style.border = '1px solid rgb(145, 145, 145)';
    }
})


const copyMessage = () => {
    const range = document.createRange();
    range.selectNode(messageOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
};

copy.addEventListener('click', copyMessage);
