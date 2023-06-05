var PreRandomNum 
var RandomNum
const Quotes = [
    "The only way to do great work is to love what you do.</br>- Steve Jobs",
    "Believe you can and you're halfway there.</br>- Theodore Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success.</br>- Albert Schweitzer",
    "The future belongs to those who believe in the beauty of their dreams.</br>- Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today.</br>- Franklin D. Roosevelt",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.</br>- Chantal Sutherland",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.</br>- Nelson Mandela",
    "Don't watch the clock; do what it does. Keep going.</br>- Sam Levenson"
  ];
function GenQuote() {
  //one more than number of quotes  ↓
    RandomNum = Math.floor(Math.random() * Quotes.length);
    if (RandomNum === PreRandomNum) {
        RandomNum++;
    }
    document.getElementById('quote_string').innerHTML = Quotes[RandomNum]
    PreRandomNum = RandomNum
    var tweetQuote = quotes[randNum].split(' ').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
    $('.twitter-share-button').attr('href', tweetQuote);
  }

  