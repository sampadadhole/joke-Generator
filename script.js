const button = document.querySelector(".get-jokes");

button.addEventListener("click", getJokes);

function getJokes(e){
    
    const numb = Math.floor(Math.random()*15);
    // console.log(numb);
    const xhr = new XMLHttpRequest();

    xhr.open("GET",`http://api.icndb.com/jokes/random/${numb}`,true);

    xhr.onload = function(){

    if(this.status === 200){
        
        const response = JSON.parse(this.responseText);
        console.log(response);
        let output ="";

        if(response.type==="success"){
            // console.log(1);
            response.value.forEach(function(joke){
                output +=
                `<div class="results>
                // <div class="emoji"></div>
                <li><div class="emoji">😂</div>${joke.joke}</li>
                </div>`;
                // console.log(output);

                // const test = document.querySelector(".jokes");
                // test.addEventListener("mouseover", function(event) {
                //     // console.log("over");
                //     output +=`<div class="emoji">🤣</div>`;
                // });
                

            });

        }
        else{
            output +=`something went wrong`;
        }
        document.querySelector(".jokes").innerHTML = output;
        // const footer = document.createElement("footer");
        // footer += `Made by Love`;
        // footer.classList.add("footer");
        
        
    
    }
}
        
    xhr.send();

    // document.querySelector("input").value="";
    e.preventDefault();
}