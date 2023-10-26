function reverseWordsInSentence(sentence) {
    // Helper function to reverse a word
    function reverseWord(word) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;
    }

    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and reconstruct the sentence
    let reversedSentence = '';
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const reversedWord = reverseWord(word);
        reversedSentence += reversedWord;
        if (i < words.length - 1) {
            reversedSentence += ' ';
        }
    }

    return reversedSentence;
}

const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
