let page = 1;
const btn = document.querySelector(".btn");
const respuestadiv = document.querySelector(".respuesta");
btn.addEventListener("click", function () {
    //
    var res = new XMLHttpRequest();
    res.open("GET", `https://learnwebcode.github.io/json-example/animals-${page}.json`);
    res.onload = function () {
        var data = JSON.parse(res.responseText);
        console.log(data[0]);
        renderHTML(data); //impresion
    }
    res.send();
    //
    if(page > 3){
        alert("ya no hay JSONs con animales");
        btn.classList.add("hide");
    }
    page++;
})

function renderHTML(data){
    var htmlString = "";
    for(i = 0; i<data.length; i++){
        htmlString += "<p>"+data[i].name +" is a "+data[i].species + " that likes";
        
        for(ii = 0; ii<data[i].foods.likes.length; ii++){
            if(ii == 0){
                htmlString += " to eat: "+data[i].foods.likes[ii];
            }else{
                htmlString += " and "+data[i].foods.likes[ii];
            }
        }

        htmlString += " and dislikes";

        for(ii = 0; ii<data[i].foods.dislikes.length; ii++){
            if(ii == 0){
                htmlString += " to eat: "+data[i].foods.dislikes[ii];
            }else{
                htmlString += " and "+data[i].foods.dislikes[ii];
            }
        }

        htmlString += "</p>" ;
    }
    respuestadiv.insertAdjacentHTML('beforeend', htmlString);
}