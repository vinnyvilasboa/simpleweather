class Fetch {
    async getCurrent(input) {
      const myKey = "772a5938a64f5d0f8aa3e42401341db0";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }