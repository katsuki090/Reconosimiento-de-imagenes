Webcam.set({
    width: 350,
    height: 280,
    image_format:'jpg',
    jpg_quality:90
}
);
var cc = document.getElementById("camara");
Webcam.attach(cc);
function tomarfoto() {
    Webcam.snap(function(ffoto) {
        document.getElementById("foto").innerHTML="<img id='imangen' src='"+ffoto+"'>";
    });
}
 modelo = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HjXwEOilZ/model.json',hh );
 function hh() {
    console.log("se encontro el modelo");
 }
 function rr() {
    d = document.getElementById("imangen");
    modelo.classify(d,tt);
 }
 function tt(erroro, resul) {
    if (erroro) {
        console.error(erroro);
        
    } else {
        console.log(resul);
        document.getElementById("objetos").innerHTML=resul[0].label;
        document.getElementById("pres").innerHTML=resul[0].confidence.toFixed(4);
    }    
 }
