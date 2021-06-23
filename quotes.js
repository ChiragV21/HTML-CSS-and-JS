var arrayofQuotes=[
{
    "author":"Nelson Mandela",
    "quote":"The greatest glory in living lies not in never falling, but in rising every time we fall."
},
{
    "author":"Walt Disney",
    "quote":"The way to get started is to quit talking and begin doing."
},
{
    "author":"Eleanor Roosevelt",
    "quote":"If life were predictable it would cease to be life, and be without flavor."
},
{
    "author":"Dalai Lama",
    "quote":"The purpose of our lives is to be happy."
},
{
    "author":"Stephen King",
    "quote":"Life is what happens when you’re busy making other plans"
}

]

function randomSelector(arrayLength)
{
    return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){

    var randomNumber=randomSelector(arrayofQuotes.length);

    document.getElementById('demo').innerHTML='"'+arrayofQuotes[randomNumber].quote+'"';

    document.getElementById('author').innerHTML='-'+arrayofQuotes[randomNumber].author;
}