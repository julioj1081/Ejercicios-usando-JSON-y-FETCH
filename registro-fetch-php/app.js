

var form = document.querySelector("#formulario");
var resp = document.querySelector("#respuesta");

form.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(form);
    /* console.log(datos.get('usuario'));
    console.log(datos.get('pass'));  */

    fetch('post.php',{
        method: 'post',
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data === 'error'){
            resp.innerHTML = `
            <div class="alert alert-danger" role="alert">
                llena todos los datos
            </div>`;
        }else{
            resp.innerHTML = `
            <div class="alert alert-primary" role="alert">
                ${data}
            </div>`;
        }
    })
});