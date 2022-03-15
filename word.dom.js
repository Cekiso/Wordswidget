const button = document.querySelector('.submit');
const message = document.querySelector('.message');
const sentence = document.querySelector('.sentence')



const wordBttnclicked = () => {
    const word = sentence.value;
    const text = word.split(" ");
    let arr = "";
    for (var i = 0; i < text.length; i++) {
        const wordelement = text[i];

        if (wordelement.length > 4) {
            arr += `<mark>${wordelement} </mark> `
        } else {
            arr += wordelement + " ";
        }

        // arr.push(word)

        message.innerHTML = arr;
        console.log(word);
    }
}
button.addEventListener('click', wordBttnclicked)