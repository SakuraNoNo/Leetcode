/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
    const morseTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const wordsMorse = words.map(word => {
        return word.split('').map(char => {
            const charAt = char.charCodeAt() - 97;
            return morseTable[charAt];
        }).join('');
    }).filter((item, index, array) => {
        return array.indexOf(item) === index;
    });

    return wordsMorse.length;
};