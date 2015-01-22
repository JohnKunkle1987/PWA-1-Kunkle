/**
 * Created by MyVyrus on 1/21/15.
 */
window.onload = init;

  //  var image = document.getElementById("zero");
    //image.onclick = showAnswer;
//}

function init() {
    var images = document.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++){
    images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObject){

    var image = eventObject.target;
    var name = image.id;
    console.log("You have clicked on image " + name + ".");
    name = "images_John_Kunkle/" + name + ".jpg";
    image.src = name;
    setTimeout(reblur, 2000, image);


}
function reblur(image){
    var name= image.id;
    name = "images_John_Kunkle/" + name + "blur.jpg";
    image.src = name;
}