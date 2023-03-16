let today = new Date();

let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.toLocaleString('default',{weekday:'long'});

document.querySelector('.display').innerText = `${day} | ${date}/${month+1}/${year}`;


let btn = document.querySelector('.button');

let quote = document.querySelector(".quote-area");

let author = document.querySelector('.name');

let quotes = [
  {
  quote:'"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."',
  author:'- Helen Keller'
},

{
  quote:'"It is during our darkest moments that we must focus to see the light."',
  author:'- Aristotle'
  
},
  
  {
    quote:'"Do not go where the path may lead, go instead where there is no path and leave a trail."',
  author:'- Ralph Waldo Emerson'
  },
  
    {
      quote:'"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."',
  author:'- Dr. Seuss'
  
    },
    
    {
      quote:'"In the end, it\'s not the years in your life that count. It\'s the life in your years."',
  author:'- Abraham Lincoln'
  
    },
      
    {
      
    quote:'"In this life we cannot do great things. We can only do small things with great love."',
    author:'- Mother Teresa'
    },
    
    {
    quote:'"Keep smiling, because life is a beautiful thing and there\'s so much to smile about."',
    author:'- Marilyn Monroe'
    },
    
    {
    quote:'"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking."',
    author:'- Steve Jobs'
    }
    ,
    
    {
      quote: '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
      author: '- Thomas A. Edison'
    },
    
    {
      quote: '"In three words I can sum up everything I\'ve learned about life: it goes on."',
      author: '- Robert Frost'
    }
    
  ];
  

btn.addEventListener('click', function(){
  let random = Math.floor(Math.random()*quotes.length);
  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
}

);