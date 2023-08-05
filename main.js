(() => {
    const select = (selector) => document.querySelector(selector);
    const selectAll = (selector) => document.querySelectorAll(selector);
    const messageInput = select('.message-input');
    const messageBox = select('.message-box');
    const enterBtn = select('.enter-btn');
    const svgColor = select('.enter-btn svg path');
    const messageOutput = select('.message-output');
    const copy = select('.copy-message');
    

    const updateMessageOutput = () => {
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

    const onInputEnter = (event) => {
        if(event.key === 'Enter'){
            updateMessageOutput();
        }
    }
    
    const onMessageInput = () => {
        messageBox.style.border = '2px solid rgba(30, 124, 255, .7)';
    }

    const onMessageInputChange = () => {
        enterBtn.style.backgroundColor = 'rgb(25, 195, 125)';
        svgColor.setAttribute('fill', 'white')
        
        if(messageInput.value.trim() === ''){
            enterBtn.style.backgroundColor = '';
            svgColor.setAttribute('fill', '#aeaec2')
        } 
    }

    const onClickOutsideInputBox = () => {
        if(!messageBox.contains(event.target)){
            messageBox.style.border = '1px solid rgb(145, 145, 145)';
        }
    }

    const copyMessage = () => {
        const range = document.createRange();
        range.selectNode(messageOutput);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    };

    enterBtn.addEventListener('click', updateMessageOutput);
    messageInput.addEventListener('keyup', onInputEnter);
    messageInput.addEventListener('click', onMessageInput);
    messageInput.addEventListener('input', onMessageInputChange);
    document.addEventListener('click', onClickOutsideInputBox);

    copy.addEventListener('click', copyMessage);

 
})()