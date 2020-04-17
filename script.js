//document.getElementById('boton-primario').innerHTML = "Juegos locos"

var boton = document.getElementById('boton-primario')

boton.addEventListener("click",function(){

    var aleatorio = Math.round(Math.random()*10);
    if (aleatorio >= 0 && aleatorio < 3) {
    var url = window.location.href.replace("index.html","operaciones/more.html")
    window.location.href = url
    } 
    
    else if (aleatorio >= 3 && aleatorio < 5) {
        var url = window.location.href.replace("index.html","operaciones/minus.html")
        window.location.href = url
    }

    else if (aleatorio >= 5 && aleatorio < 7) {
        var url = window.location.href.replace("index.html","operaciones/division.html")
        window.location.href = url
    }

    else if (aleatorio >= 7 && aleatorio < 9) {
        var url = window.location.href.replace("index.html","operaciones/multiplication.html")
        window.location.href = url
    }
    else if (aleatorio >= 9 && aleatorio < 11) {
        var url = window.location.href.replace("index.html","operaciones/minus.html")
        window.location.href = url
    }


})