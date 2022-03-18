const wordWidgets = () => {

    //displaying the sentence and highligth the words >4 and count the words in a sentence 
    const displayWord = text => {

            let counter = 0;
            const sentence = "";
            const word = sentence.value;
            const text = word;
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
                return arr;
            }
            return counter;


        }
        //is for the checkbox that hides the short words i a sentence
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

                return arr1 += ''
            }

            return arr1
        }

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

            lreturn `This is the longerst word:<mark class="log">${anotherLongword}</mark>`

        }

    }

    return {
        displayWord,
        checkHide,
        longestWords

    }
}