var PreRandomNum 
var RandomNum
var tweetText
var tweetUrl
const Quotes = [
  "Be yourself; everyone else is already taken.- Oscar Wilde",
  "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.- William W. Purkey",
  "Be the change that you wish to see in the world.- Mahatma Gandhi",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.- Martin Luther King Jr.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.- Mahatma Gandhi",
  "We accept the love we think we deserve.- Stephen Chbosky",
  "Without music, life would be a mistake.- Friedrich Nietzsche",
  "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.- Marilyn Monroe",
  "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.- Albert Einstein",
  "We are all in the gutter, but some of us are looking at the stars.- Oscar Wilde",
  "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.- Neil Gaiman",
  "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.- Bill Keane",
  "I have not failed. I've just found 10,000 ways that won't work.- Thomas A. Edison",
  "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.- Elie Wiesel",
  "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.- Albert Einstein",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the one who'll decide where to go...- Dr. Seuss",
  "It is never too late to be what you might have been.- George Eliot",
  "There is no greater agony than bearing an untold story inside you.- Maya Angelou",
  "Everything you can imagine is real.- Pablo Picasso",
  "You can never get a cup of tea large enough or a book long enough to suit me.- C.S. Lewis",
  "Life isn't about finding yourself. Life is about creating yourself.- George Bernard Shaw",
  "To the well-organized mind, death is but the next great adventure.- J.K. Rowling",
  "Do what you can, with what you have, where you are.- Theodore Roosevelt",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.- Winston S. Churchill",
  "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.- Helen Keller",
  "So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.- Stephen Chbosky",
  "Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.- Shel Silverstein",
  "And, when you want something, all the universe conspires in helping you to achieve it.- Paulo Coelho",
  "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.- John Lennon,Its no use going back to yesterday, because I was a different person then.- Lewis Carroll",
  "It's the possibility of having a dream come true that makes life interesting.- Paulo Coelho",
  "What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain.- Maya Angelou",
  "A person's a person, no matter how small.- Dr. Seuss",
  "You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.- Nicholas Sparks",
  "Well-behaved women seldom make history.- Laurel Thatcher Ulrich",
  "So we beat on, boats against the current, borne back ceaselessly into the past.- F. Scott Fitzgerald",
  "When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it, always.- Mahatma Gandhi",
  "Nothing is impossible, the word itself says 'I'm possible'!- Audrey Hepburn",
  "Do what you feel in your heart to be right  for youll be criticized anyway.- Eleanor Roosevelt",
  "I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.- Herbert Bayard Swope",
  "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.- Margaret Mead",
  "Happiness is not something ready made. It comes from your own actions.- Dalai Lama XIV",
  "Do not read, as children do, to amuse yourself, or like the ambitious, for the purpose of instruction. No, read in order to live.- Gustave Flaubert",
  "Peace begins with a smile..- Mother Teresa",
  "Friendship is unnecessary, like philosophy, like art.... It has no survival value; rather it is one of those things which give value to survival.- C.S. Lewis",
  "I hope she'll be a fool -- that's the best thing a girl can be in this world, a beautiful little fool.- F. Scott Fitzgerald",
  "Who controls the past controls the future. Who controls the present controls the past.- George Orwell",
  "Whatever you are, be a good one.- Abraham Lincoln",
  "May you live every day of your life.- Jonathan Swift",
  "Two wrongs don't make a right, but they make a good excuse.- Thomas Szasz",
  "First they ignore you. Then they ridicule you. And then they attack you and want to burn you. And then they build monuments to you.- Nicholas Klein",
  "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.- Roy T. Bennett",
  "If my life is going to mean anything, I have to live it myself.- Rick Riordan",
  "I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.- Robert Fulghum",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.- Roy T. Bennett",
  "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?- L.M. Montgomery",
  "You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes.- A.A. Milne",
  "Hope is the thing with feathers That perches in the soul And sings the tune without the words And never stops at all.- Emily Dickinson",
  "Pain is inevitable. Suffering is optional.- haruki murakami",
  "Instead of worrying about what you cannot control, shift your energy to what you can create.- Roy T. Bennett",
  "If you're reading this...Congratulations, you're alive.If that's not something to smile about,then I don't know what is.- Chad Sugg",
  "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven..- John Milton",
  "Always do what you are afraid to do.- Ralph Waldo Emerson",
  "Our lives begin to end the day we become silent about things that matter.- Martin Luther King Jr.",
  "Talent hits a target no one else can hit. Genius hits a target no one else can see.- Arthur Schopenhauer",
  "Hell is empty and all the devils are here.- William Shakespeare",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.- Martin Luther King Jr.",
  "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.- J.R.R. Tolkien",
  "It is so hard to leaveuntil you leave. And then it is the easiest goddamned thing in the world.- John Green",
  "Fantasy is hardly an escape from reality. It's a way of understanding it.- Lloyd Alexander",
  "Be the reason someone smiles. Be the reason someone feels loved and believes in the goodness in people.- Roy T. Bennett",
  "Never let your sense of morals prevent you from doing what is right.- Isaac Asimov",
  "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.- Paulo Coelho",
  "Take responsibility of your own happiness, never put it in other peoples hands.- Roy T. Bennett",
  "If you remember me, then I don't care if everyone else forgets.- Haruki Murakami",
  "Be mindful. Be grateful. Be positive. Be true. Be kind.- Roy T. Bennett",
  "The only way to do great work is to love what you do.- Steve Jobs",
  "Believe you can and you're halfway there.- Theodore Roosevelt",
  "Success is not the key to happiness. Happiness is the key to success.- Albert Schweitzer",
  "The future belongs to those who believe in the beauty of their dreams.- Eleanor Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today.- Franklin D. Roosevelt",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this.- Chantal Sutherland",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.- Nelson Mandela",
  "Don't watch the clock; do what it does. Keep going.- Sam Levenson"
  ];
function GenQuote() {
  //one more than number of quotes  ↓
    RandomNum = Math.floor(Math.random() * Quotes.length);
    if (RandomNum === PreRandomNum) {
        RandomNum++;
    }
    var quote = Quotes[RandomNum];
    var separatorIndex = quote.lastIndexOf("-");
    var quoteText = quote.substring(0, separatorIndex);
    var authorText = quote.substring(separatorIndex + 1);
    
    document.getElementById('quote_string').innerHTML = quoteText;
    document.getElementById('author_string').innerHTML = "- " + authorText;

    tweetText = encodeURIComponent(`${quoteText} - ${authorText}`);
    tweetUrl = `http://twitter.com/intent/tweet?text=${tweetText}`;
    
    document.getElementById('a-icon-t').setAttribute("href", tweetUrl)

    PreRandomNum = RandomNum
  }



  