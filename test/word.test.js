describe('Words Widget', function() {
    describe('', function() {

        it('should be able to highlight the word >4 in the sentence', function() {
            let testingWords = wordWidgets();
            testingWords.displayWord('hello world');
            assert.equal(testingWords.)

        });
    });
    it('should be able to count the words in a sentence', function() {
        let testingWords = wordWidgets();
        testingWords.displayWord('How are you today');
        assert.equal(testingWords.displayWord(4))


    });
    describe('Hide and highlight', function() {

        it('the check button should be able to hide the shortest words in a sentence', function() {
            let testingWords = wordWidgets();
            testingWords.checkHide('How are you today');
            assert.equal(testingWords.checkHide('How are you'))
        });
        it('should be able to highlight the longest word in the setence', function() {
            let testingWords = wordWidgets();
            testingWords.longestWords('How are you doing today Nonkululeko');
            assert.equal(testingWords.longestWords('Nonkululeko'))


        });
    });

})