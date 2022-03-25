const wordWidgets = (existingSentence) => {
    let counter = 0;

    let wordList = existingSentence || [];

    const wordCounter = (sentence) => {
        const text = sentence.split(" ");
        for (var i = 0; i < text.length; i++) {
            const wordelement = text[i];
            if (wordelement.length > 0) {
                counter++
            }

        }
        return counter;
    }

    const sentenceWord = (sentence) => {


        const text = sentence.split(" ");

        let arr = "";
        var getLongword = '';

        for (var i = 0; i < text.length; i++) {
            if (text[i].length >= getLongword.length) {
                getLongword = text[i]

            }
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


            console.log(wordelement);
            // arr.push(word)

        }

        return arr;


    }
    const hideHighlight = (sentence) => {
        // const test = wordBttnclicked();

        const split = sentence.split(" ");

        let arr1 = "";
        var getLongword = '';
        for (var i = 0; i < split.length; i++) {
            if (split[i].length >= getLongword.length) {
                getLongword = split[i]
            }
        }

        for (var i = 0; i < split.length; i++) {
            const wordelement = split[i];
            //wordelement.length == getLongword.length
            if (wordelement.length == getLongword.length) {
                arr1 += `<mark class="log">${wordelement}</mark> `

            } else if (split[i].length > 5) {

                arr1 += `<mark>${wordelement}</mark> `
            } else {

                arr1 += ''
            }


        }

        return arr1
    }
    const markedWords = (sentence) => {
        const split = sentence.split(" ");

        let arr1 = "";
        var getLongword = '';
        for (var i = 0; i < split.length; i++) {
            if (split[i].length >= getLongword.length) {
                getLongword = split[i]
            }
        }
        for (var i = 0; i < split.length; i++) {
            const wordelement = split[i];
            //wordelement.length == getLongword.length
            if (split[i].length > 4) {

                arr1 += `<mark>${wordelement}</mark> `
            } else {

                arr1 += ''
            }


        }

        return arr1
    }

    const counterWord = () => {
        return wordList.length;

    }

    function senteces() {
        console.log(wordList);
        return wordList;

    }

    return {
        sentenceWord,
        wordCounter,
        hideHighlight,
        counterWord,
        senteces,
        markedWords
    }
}