const API_URL = "https://dummyjson.com/quotes/random"

const quote = document.querySelector(".quote");
const btn = document.querySelector("#quote");
const author = document.querySelector(".author")


const callAPI = async () => {
    console.log("Getting quotes...");
    quote.innerText = "Wait a moment! Generating Quotes..."
    author.innerText = "Figuring out who said it..."
    let respons = await fetch(API_URL);
    let data = await respons.json();
    console.log(respons);

    console.log(data);
    quote.innerText = "\"" + data.quote + "\"";
    author.innerText = "- " + data.author;
}

btn.addEventListener("click", callAPI);