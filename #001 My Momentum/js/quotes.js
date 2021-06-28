const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

fetch('https://favqs.com/api/qotd')
.then(a => a.json())
.then((data) => 
{
    quote.innerHTML =`${data['quote']['body']}`;
    author.innerHTML =`${data['quote']['author']}`;
});




