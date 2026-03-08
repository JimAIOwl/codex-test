const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.textContent = `“${quote.text}”`;
  quoteAuthor.textContent = `— ${quote.author}`;
}

newQuoteBtn.addEventListener("click", displayRandomQuote);
