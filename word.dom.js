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
    let test = wordBttnclicked();
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

        message.innerHTML = arr1
    }

}
const longestWords = () => {


    console.log(sentence.value)
    const word = sentence.value;
    const long = word.split(' ');
    var getLongword = '';
    for (var i = 0; i < long.length; i++) {
        if (long[i].length >= getLongword.length) {
            getLongword = long[i]
        }
        console.log(getLongword);
    }

    longest.innerHTML = `This is the longerst word:<mark>${getLongword}</mark>`

}





checkbox.addEventListener('change', checkHide);
button.addEventListener('click', wordBttnclicked);
checkbox.addEventListener('change', longestWords);