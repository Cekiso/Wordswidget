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
    var getLongword = '';
    let anotherLongword = ""
    for (var i = 0; i < text.length; i++) {
        if (text[i].length >= getLongword.length) {
            getLongword = text[i]

        }

        console.log(getLongword);
    }
    // const filterLong = (wordelement => wordelement.length == getLongword.length)
    for (var i = 0; i < text.length; i++) {

        const wordelement = text[i];
        ////wordelement.length == getLongword.length
        if (wordelement.length > 6) {
            arr += `<mark class="log">${wordelement}</mark> `

        } else if (wordelement.length > 4) {
            arr += `<mark>${wordelement}</mark> `

        } else {
            arr += wordelement + " ";
        }

        if (wordelement.length > 0) {
            counter++
        }
        console.log(wordelement);
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
    var getLongword = '';
    for (var i = 0; i < split.length; i++) {
        if (split[i].length >= getLongword.length) {
            getLongword = split[i]
        }

        console.log(getLongword);
    }

    for (var i = 0; i < split.length; i++) {
        const wordelement = split[i];
        //wordelement.length == getLongword.length
        if ((checkbox.checked == true) && wordelement.length > 6) {
            arr1 += `<mark class="log">${wordelement}</mark> `

        } else if ((checkbox.checked == true) && (split[i].length > 5)) {

            arr1 += `<mark>${wordelement}</mark> `
        } else {

            arr1 += ''
        }


    }
    console.log(checkbox.checked)

    for (let i = 0; i < split.length; i++) {
        const wordelement = split[i];

        if (checkbox.checked == false) {
            test += `<mark>${wordelement}</mark> `

        }
    }
    message.innerHTML = arr1
}


checkbox.addEventListener('change', checkHide);
button.addEventListener('click', wordBttnclicked);
// checkbox.addEventListener('change', longestWords);