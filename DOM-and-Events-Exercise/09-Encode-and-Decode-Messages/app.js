function encodeAndDecodeMessages() {
    let buttons = Array.from(document.querySelectorAll('#main button'));
    let textHolders = Array.from(document.querySelectorAll('main textarea'));

    buttons[0].addEventListener('click', sennAndCode);
    buttons[1].addEventListener('click', decode);

    function transform(text, fn) {
        return text.split('').map(fn).join('');
    }

    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }

    function prevChar(c) {
        return String.fromCharCode(c.charCodeAt(0) - 1);
    }


    function sennAndCode() {
        textHolders[1].value = transform(textHolders[0].value, nextChar);
        textHolders[0].value = '';
    }

    function decode() {
        textHolders[1].value = transform(textHolders[1].value, prevChar)
    }
}

// Option 2
function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName("button");
    let encoodeButton = buttons[0];
    let decodeButton = buttons[1];

    let textAreas = document.getElementsByTagName("textarea");
    let encoodeTextArea = textAreas[0];
    let decodeTextArea = textAreas[1];

    function transformText(text, transformationFunction)
    {
        return text.split('').map(transformationFunction).join('');
    }

    function nextChar(char)
    {
        return String.fromCharCode(char.charCodeAt() + 1);
    }

    function previousChar(char)
    {
        return String.fromCharCode(char.charCodeAt() + -1);
    }

    function encodeText(){
        decodeTextArea.value = transformText(encoodeTextArea.value, nextChar);
        encoodeTextArea.value = "";
    }

    function decodeText(){
        decodeTextArea.value = transformText(decodeTextArea.value, previousChar);
    }

    encoodeButton.addEventListener('click', encodeText)
    decodeButton.addEventListener('click', decodeText)
}