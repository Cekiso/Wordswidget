const button = document.querySelector('.submit');
const message = document.querySelector('.message');
const sentence = document.querySelector('.sentence');
const words = document.querySelector('.counter');
const checkbox = document.querySelector('.myCheckbox');
const longest = document.querySelector('.longest')



const wordBttnclicked = () => {
    let counter = 0;
    const word = sentence.value;
    const text = word.split(" ");
    let arr = "";
    for (var i = 0; i < text.length; i++) {
        const wordelement = text[i];

        if (wordelement.length > 4) {
            arr += `<mark>${wordelement}</mark> `
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

const checkHide = () => {
    const test = wordBttnclicked();
    const word = sentence.value;
    const split = word.split(" ");
    let arr1 = "";

    for (var i = 0; i < split.length; i++) {
        const wordelement = split[i];


        if ((checkbox.checked == true) && (split[i].length >= 5)) {
            arr1 += `<mark>${wordelement}</mark> `
        } else {

            arr1 += ''
        }

    }

    for (let i = 0; i < split.length; i++) {
        const wordelement = split[i];

        if (checkbox.checked == false) {
            test += `<mark>${wordelement}</mark> `

        }
    }
    message.innerHTML = arr1
}
const longestWords = () => {


    console.log(sentence.value)
    const word = sentence.value;
    const long = word.split(' ');
    var getLongword = '';
    let anotherLongword = ""
    for (var i = 0; i < long.length; i++) {
        if (long[i].length >= getLongword.length) {
            getLongword = long[i]
        }

        console.log(getLongword);
    }

    for (let i = 0; i < long.length; i++) {
        const element = long[i];
        if (element.length == getLongword.length) {
            anotherLongword += element;
        }

        longest.innerHTML = `This is the longerst word:<mark class="log">${anotherLongword}</mark>`

    }

}





checkbox.addEventListener('change', checkHide);
button.addEventListener('click', wordBttnclicked);
checkbox.addEventListener('change', longestWords);