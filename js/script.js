/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
/*
  I am going for the "Exceeds Expectations" grade. Thank you for your time.
 */

  /*** 
 * Created a quotes array. 
***/
const quotes = [
  {
    quote: `I know very little about anything, but I do know this: That if you can live your lfe without an audience, you should do it.`,
    source: `Bo Burnham`,
    citation: 'Make Happy',
    year: 2016,
    category: 'Life'
  },
  {
    quote: `A kiss may ruin a human life.`,
    source: `Oscar Wilde`,
    citation: `A Woman of No Importance, Mrs. Arbuthnot, Act 4`,
    year: 1893,
    category: 'Love'
  },
  {
    quote: `Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.`,
    source: `Martin Luther King, Jr.`,
    citation: `Strength to Love`,
    year: 1963,
    category: 'Love'
  },
  {
    quote: `Wild men who caught and sang the sun in flight, And learn, too late, they grieved it on its way, Do not go gentle into that good night.`,
    source: `Dylan Thomas`,
    citation: `Botteghe Oscure`,
    year: 1951
  },
  {
    quote: `We walk alone in the world. Friends, such as we desire, are dreams and fables.`,
    source: `Ralph Waldo Emerson`,
    citation: `Essays, First Series`,
    year: 1841,
    category: 'Friends'
  },
  {
    quote: `Wickedness is always easier than virtue; for it takes the short cut to everything.`,
    source: `Samuel Johnson`,
    citation: `The Journal of a Tour to the Hebrides`,
    year: 1785
  },
  {
    quote: `There must be something in books, things we can't imagine, to make a woman stay in a burning house; there must be something there. You don't stay for nothing.`,
    source: `Ray Bradbury`,
    citation: `Fahrenheit 451, Guy Montag`,
    year: 1953,
    category: 'Books'
  },
  {
    quote: `Time is an illusion. Lunchtime doubly so.`,
    source: `Douglas Adams`,
    citation: `The Hitchhiker's Guide to the Galaxy, Ford Prefect`,
    year: 1978,
    category: 'Funny'
  },
  {
    quote: `Knowing where you came from is no less important than knowing where you are going.`,
    source: `Neil deGrasse Tyson`,
    citation: `In the Beginning, Natural History Magazine`,
    year: 2003
  },
  {
    quote: `I try all things, I achieve what I can.`,
    source: `Herman Melville`,
    citation: `Moby Dick, Ishmael`,
    year: 1851,
    category: 'Inspirational'
  }
];

/***
 * Created the getRandomQuote() function as an arrow function expression since it is just being used as data.
 * The fucntion returns a number 0 to the length of the quotes array minus 1.
***/
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

/***
 * randomColor() function returns a random RGB value
 ***/
const randomColor = function() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
}

/***
 * usedQuotes array created to store quote objects already used and to not repeat
 * clearUsedQuotes() funciton cleares the usedQuotes array so it can keep iterating through the quotes array.
 ***/
let usedQuotes = [];
const clearUsedQuotes = () => usedQuotes = []; 

/***
 *  Created printQuote() function.
***/

function printQuote() {
  let quoteObj = getRandomQuote();
  let html = ``;
  
  // While loop checks if current quote was already used to replace it if necessary.
  while (usedQuotes.includes(quoteObj)) {
    quoteObj = getRandomQuote();
    if (usedQuotes.length === quotes.length) {
      clearUsedQuotes();
    }
  }
  usedQuotes.push(quoteObj);
  
  // The following conditional statements check to see if it has properties to print to the page.
  if (quoteObj.quote) {
    html += `<p class="quote">${quoteObj.quote}</p>`;
  }
  if (quoteObj.source) {
    html += `<p class="source">${quoteObj.source}`;
  }
  if (quoteObj.citation) {
    html += `<span class="citation">${quoteObj.citation}</span>`;
  }
  if (quoteObj.year) {
    html += `<span class="year">${quoteObj.year}</span>`;
  }
  if (quoteObj.category) {
    html += `<span class="year"> (<i>${quoteObj.category}</i>) </span>`;
  }
  html += `</p>`;

  document.querySelector('body').style.backgroundColor = randomColor();
  
  return document.getElementById('quote-box').innerHTML = html;
} 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 * Interval set at 10 secs.
***/
window.setInterval(printQuote, 10000);
document.getElementById('load-quote').addEventListener("click", printQuote, false);