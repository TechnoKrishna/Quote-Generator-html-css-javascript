const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("newquote");
const textCopy = document.getElementById("copy");
var copy;
var random;

NumberGenerator();

// CLICK EVENT
newQuoteBtn.addEventListener("click", function(){
    NumberGenerator();
});


// GET RANDOM NUMBER
function NumberGenerator(){
    random = Math.floor(Math.random() * 1643);
    // console.log(random);
    getQuote();
}

// GET QUOTE FROM API
async function getQuote(){
    const apiUrl = 'https://type.fit/api/quotes';
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log(data);

    quoteText.innerHTML = data[random].text;
    quoteAuthor.innerHTML = "-" + data[random].author; 
}



