const wordWidgets = () => {
    let counter = 0;

    const wordCounter = () => {
        const word = "";
        const text = word.split(" ");
        for (var i = 0; i < text.length; i++) {
            const wordelement = text[i];
            if (wordelement.length > 0) {
                counter++
            }
            return counter;
        }
    }

    const sentenceWord = () => {
        const word = "";
        const text = word.split(" ");
        let arr = "";
        const getLongword = '';
        for (var i = 0; i < text.length; i++) {
            const wordelement = text[i];

            if (wordelement.length == getLongword.length) {
                return wordelement
            } else if (wordelement.length > 4) {
                return wordelement


            } else {
                return ""
            }
        }
        return arr;
    }
    return {
        sentenceWord,
        wordCounter
    }
}