class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
        this.defaultCity = "New York";
    }

    populateUI(data) {
        //de-structure vars

        //add them to inner HTML
        let current = Math.floor(data.main.temp)
        let high = Math.floor(data.main.temp_max)
        let low = Math.floor(data.main.temp_min)
        this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;"> 
              <div class="card-body justify-content-center">
                  <h1 class="card-title" >${data.name}, ${data.sys.country}</h1>
                  <h2 class="card-subtitle mb-2 text-muted">› Currently: ${current}</h2>
                  <h2 class="card-subtitle mb-2 text-muted">› Highs of ${high}</h2>
                  <h2 class="card-subtitle mb-2 text-muted">› Lows of ${low}</h2>
                  <h3 class="card-text "><i>Weather conditions:</i> </br> ${data.weather[0].description}</h3>
                  
              </div>
          </div>
          
          
          `;
    }

    clearUI() {
        uiContainer.innerHTML = "";
    }

    saveToLS(data) {
        localStorage.setItem("city", JSON.stringify(data));
    }

    getFromLS() {
        if (localStorage.getItem("city" == null)) {
            return this.defaultCity;
        } else {
            this.city = JSON.parse(localStorage.getItem("city"));
        }

        return this.city;
    }

    clearLS() {
        localStorage.clear();
    }
}


