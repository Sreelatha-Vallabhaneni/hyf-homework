
// Find the shortest word
const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
shortestWord = danishWords.reduce(function (prev, next) {
    if (prev.length < next.length) {
        return prev;
    } else if (prev.length === next.length) {
        return `${prev} ${next}`;
    } else {
        return next;
    }
});
console.log(shortestWord);

