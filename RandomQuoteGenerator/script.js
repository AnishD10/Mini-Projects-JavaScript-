const quote = document.getElementById("quoteDisplay")
const author = document.getElementById("authorDisplay")
const button = document.getElementById("generate")

generateQuote = async () => {

    const read = await fetch("https://dummyjson.com/quotes/random")
    const quotes = await read.json()

    quote.textContent = `"${quotes.quote}"`
    author.textContent = `-${quotes.author}`



} 

button.addEventListener("click", () => generateQuote())

generateQuote()