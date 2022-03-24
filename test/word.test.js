describe('Words Widget', function() {
    describe('', function() {

        it('should be able to highlight the word >5 in the sentence', function() {
            const testingWords = wordWidgets('The cat is red fence');
            const word = testingWords.sentenceWord();

            assert.equal('', word)


        });
    });
    it('should be able to count the words in a sentence', function() {
        const testingWords = wordWidgets();
        const word = testingWords.wordCounter();
        assert.equal(0, word)


    });

})