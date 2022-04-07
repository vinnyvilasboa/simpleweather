class DadFetch {
    async getJoke(){
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {'Accept': 'application/json'}
        })
        const jokeObj = await response.json();
        console.log(jokeObj)
    }
}