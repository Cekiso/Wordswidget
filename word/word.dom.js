const button = document.querySelector('.submit');
const message = document.querySelector('.message');
const sentence = document.querySelector('.sentence');
const words = document.querySelector('.counter');
const checkbox = document.querySelector('.myCheckbox');
const sentencesWords = document.querySelector('.sentencesWords')

const templateSource = document.querySelector(".userTemplate").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

let existingSentence;

//checking if the sentence is stored in the localStorage
if (localStorage['sentence']) {

    existingSentence = JSON.parse(localStorage['sentence'])

}

const setenceInstance = wordWidgets(existingSentence);


const wordBttnclicked = () => {
    let counter = 0;
    const word = sentence.value;
    const text = word.split(" ");

    let arr = "";

    for (var i = 0; i < text.length; i++) {

        const wordelement = text[i];
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
        message.innerHTML = arr;
    }
    if (localStorage['sentence']) {
        const sentenceListString = localStorage['sentence'];
        existingSentence = sentenceListString;
    }
    words.innerHTML = counter;

    setenceInstance.setSenteces(word)

    sentencesWords.innerHTML = userTemplate({
        paragraphs: setenceInstance.getSentences()
    })
    localStorage['sentence'] = sentence;
    // console.log(setenceInstance.getSentences());
    localStorage['sentence'] = JSON.stringify(setenceInstance.getSentences());


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