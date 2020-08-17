/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Created a quotes array. 
***/
const quotes = [
  {
    quote: `I know very little about anything, but I do know this: That if you can live your lfe without an audience, you should do it.`,
    source: `Bo Burnham`,
    citation: 'Make Happy',
    year: 2016
  },
  {
    quote: `A kiss may ruin a human life.`,
    source: `Oscar Wilde`,
    citation: `A Woman of No Importance, Mrs. Arbuthnot, Act 4`,
    year: 1893
  },
  {
    quote: `Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.`,
    source: `Martin Luther King, Jr.`,
    citation: `Strength to Love`,
    year: 1963
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
    year: 1841
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
    year: 1953
  },
  {
    quote: `Time is an illusion. Lunchtime doubly so.`,
    source: `Douglas Adams`,
    citation: `The Hitchhiker's Guide to the Galaxy, Ford Prefect`,
    year: 1978
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
    year: 1851
  }
];

/***
 * Created the getRandomQuote() function as an arrow function expression since it is just being used as data.
***/
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

/***
 *  Created printQuote() function.
***/
function printQuote() {
  const quoteObj = getRandomQuote();
  let html = `
  <p class="quote">${quoteObj.quote}</p>
  <p class="source">${quoteObj.source}
  `;
  // The conditional statement checks if citation property and year property are undefined.
  if (quoteObj.citation && quoteObj.year) {
    html += `
    <span class="citation">${quoteObj.citation}</span>
    <span class="year">${quoteObj.year}</span>
    `;
  } else if (quoteObj.citation) {
    html += `<span class="citation">${quoteObj.citation}</span>`;
  } else if (quoteObj.year) {
    html += `<span class="year">${quoteObj.year}</span>`;
  }
  html += `</p>`;
  return document.getElementById('quote-box').innerHTML = html;
} 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);