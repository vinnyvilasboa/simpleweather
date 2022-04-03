class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
      this.defaultCity = "New York";
    }
  
    populateUI(data) {
      //de-structure vars
  
      //add them to inner HTML
  
      this.uiContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;">
              <div class="card-body justify-content-center">
                  <h1 class="card-title" >${data.name}</h1>
                  <h2 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h2>
                  <h3 class="card-text ">Weather conditions are described as: ${data.weather[0].description}</h3>
                  
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