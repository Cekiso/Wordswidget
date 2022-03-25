describe('Words Widget', function() {
    describe('', function() {

        it('should be able to highlight the word >5 and the <5 should not be highlighted in the sentence', function() {
            const testingWords = wordWidgets();
            const word = testingWords.sentenceWord('The cat is red fence nonkululeko');

            assert.equal('The cat is red <mark>fence</mark> <mark class="log">nonkululeko</mark> ', word)


        });
    });
    it('should be able to count the words in a sentence. The counter should be 7', function() {
        const testingWords = wordWidgets();
        const word = testingWords.wordCounter('How did the car jump the fence');
        assert.equal(7, word)


    });
    it('should be able to count the words in a sentence. The counter should be 5', function() {
        const testingWords = wordWidgets();
        const word = testingWords.wordCounter('How did the car jump');
        assert.equal(5, word)


    });

    describe('Hide and highligth', function() {

        describe('Highligth the longest words in the sentence', function() {
            it('should be able to show the longest word highlighted', function() {
                const testingWords = wordWidgets();
                const word = testingWords.hideHighlight('The cat is red fence nonkululeko');


                assert.equal('<mark class="log">nonkululeko</mark> ', word)


            });
            it('should be able to show the longest word highlighted', function() {
                const testingWords = wordWidgets();
                const word = testingWords.hideHighlight('The fox is jumping the fence again');


                assert.equal('<mark class="log">jumping</mark> ', word)


            });
        });
        describe('Highligth the short words in the sentence', function() {

            it('should highligth the short word in the sentence', function() {
                const testingWords = wordWidgets();
                const word = testingWords.markedWords('Girls enjoy to coding during their free time');


                assert.equal('<mark>Girls</mark> <mark>enjoy</mark> <mark>coding</mark> <mark>during</mark> <mark>their</mark> ', word)


            });
            it('should highligth the short word in the sentence', function() {
                const testingWords = wordWidgets();
                const word = testingWords.markedWords('Hi what a great day to do your unit tests after a long week');


                assert.equal('<mark>great</mark> <mark>tests</mark> <mark>after</mark> ', word)


            });
        });
    });


})