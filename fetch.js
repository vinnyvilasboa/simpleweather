//create new class function OOP
class Fetch {
    //
    async getCurrent(input) {
        const myKey = "772a5938a64f5d0f8aa3e42401341db0";


        //make request to url
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}

/*
//

take notes
reproduce 
notice overlap

1. create class so that whenever it's called in other locations it will create a new instance of it. 

2. store api key variable

3. async await api call to openweathermap

-async function intaking input 
-await fetch from url using input and apiKey + Store it in reponse variable
-await response.json() and store it in data variable
-return data
 */

/*
class Fetch {
    
    async getCurrent(input){
    const myKey = '#####################'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`)

        const data = response.json()

        return data
    }

}



*/