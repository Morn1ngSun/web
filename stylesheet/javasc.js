const txtElement = ['Muhammad Kevin Assydiqi',];
let currentTxt = '';
let words = '';
let count = 0;
let txtIndex = 0;

(function tik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-tik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(tik, 100);


})();