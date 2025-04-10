function getjoke(){
    const apiurl = "https://api.chucknorris.io/jokes/random";

    const jokeElement = document.getElementById("jokeContainer");

    let loading = document.getElementById("loading");
    loading.style.display = 'block';

    fetch(apiurl)
        .then(response => response.json())
        .then(data => {

            loading.style.display = 'none';

            jokeElement.innerHTML = data.value;
        })
        .catch(err => {
            console.log(err);
        });
    
}