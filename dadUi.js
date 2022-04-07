class DadUi {
    constructor(){
        this.dadContainer = document.getElementById("content")

    }
    populateJokes(data) {
        
        this.dadContainer.innerHTML = `
          
          <div class="card mx-auto mt-5" style="width: 18rem;"> 
              <div class="card-body justify-content-center">
                  <h1 class="card-title" >${data.joke}}</h1>
                  
                  
              </div>
          </div>
          
          
          `;
    }

}