 var jsfotos = "/images.js";
function getJSON(){

    $.getJSON('https://api.myjson.com/bins/i8run', function(dataWeather){
        createGrid(dataWeather);
    
    });
}
getJSON();
function createGrid(param){
    
    var tiempoPais = param.list;
    $.each(tiempoPais, function(index, pais){
        var npais = pais.name;
        var local1 = pais.coord.lon;
        var local2 = pais.coord.lat;
        var temper = pais.main.temp + "º";
        var tiempo = pais.weather[0].main;
        var iconCode = pais.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        var fotos = jsonImage.imagenes[index].url;
    
        
        var grupo = $('<div class="grupo"></div>');
        var nombre = $('<p class="parrafo"></p>');
        var longitud = $('<p class="coorde"/>');
        var latitud = $('<p class="coorde"/>');
        var temperatura = $('<p class="parrafo2" />');
        var icono = $("<img class='redonda' src='" + iconUrl  + "'>");
        var clima = $('<p class="parrafo3"/>');
        var imgfoto = $("<img class='retoque' src='" + fotos  + "'>"); 
        
        
        //var front = $('<div></div>');
        //$(front).append(nombre);
        $(grupo).css('background', 'url(' + fotos + ') no-repeat center center');
        //$(grupo).css('background-repeat , 
        

        temperatura.append(temper);
        latitud.append(local2);
        longitud.append(local1);
        nombre.append(npais);
        clima.append(tiempo);
        icono.append(iconUrl);
        
        
        //APPENDS//
        //grupo.append(front);
        //grupo.append(imgfoto);
        //imgfoto.append(nombre);
        grupo.append(nombre);
        grupo.append(icono);
        grupo.append(clima);
        grupo.append(temperatura);
        $('#grid').append(grupo);
 });
}
