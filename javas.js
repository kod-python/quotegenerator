const quoteContainer = document.getElementById("quote-container")

const quoteText =  document.getElementById("quote")

const authorText =  document.getElementById("author")

const newQuoteBtn =  document.getElementById("new-quote")


let apiQuotes = []

function newQuote() {
    // pick a radnom quote

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

if(!quote.author){
    authorText.textContent = "unknown"
}
else{
    let authorName = quote.author.replace(", type.fit", "")
    authorText.textContent = authorName
}

quoteText.textContent = quote.text;
// authorText.textContent = quote.author;

}


// get quotes

async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes";

    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){

    }
}

newQuoteBtn.addEventListener('click', newQuote)
getQuotes();