const button = document.querySelector('.submit');
const message = document.querySelector('.message');
const sentence = document.querySelector('.sentence');
const words = document.querySelector('.counter');



const wordBttnclicked = () => {
    let counter = 0;
    const word = sentence.value;
    const text = word.split(" ");
    let arr = "";
    for (var i = 0; i < text.length; i++) {
        const wordelement = text[i];




        if (wordelement.length > 4) {
            arr += `<mark>${wordelement} </mark>`

        } else {
            arr += wordelement + " ";


        }
        if (wordelement.length > 0) {
            counter++
        }


        // arr.push(word)

        message.innerHTML = arr;


    }
    words.innerHTML = counter;
}
button.addEventListener('click', wordBttnclicked)