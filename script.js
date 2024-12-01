const themeBtn = document.getElementById("themeChange");
const searchBtn = document.getElementById("searchBtn");
//Слушатели событий
themeBtn.addEventListener("click", themeChange);
searchBtn.addEventListener("click", findMovie)
//Cмена темы
function themeChange() {
    const body = document.querySelector("body")
    body.classList.toggle("dark")
}



async function sendRequest(url, method, data) {
    if(method == "POST") {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        response = await response.json()
        return response
    } else if(method == "GET") {
        url = url+"?"+ new URLSearchParams(data)
        let response = await fetch(url, {
            method: "GET"
        })
        response = await response.json()
        return response
    }
}
//Поиск фильма
 async function findMovie () {
    let search = document.getElementByName("search")[0].value;
    
    let data = { apikey:"c00ec9e6" , t: search };
    let response = await sendRequest("http://www.omdbapi.com/", "GET" , data);
    return console.log(response);

 }

