const button = document.querySelector('.submit');
const message = document.querySelector('.message');
const sentence = document.querySelector('.sentence');
const words = document.querySelector('.counter');
const checkbox = document.querySelector('.myCheckbox')



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

function checkHide() {
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
        if (split[i].length >= 8) {
            arr1 += `<mark>${wordelement}</mark> `
        }
        message.innerHTML = arr1
    }

}


checkbox.addEventListener('change', checkHide)
button.addEventListener('click', wordBttnclicked)