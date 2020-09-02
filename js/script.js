// the main js code


var pop = document.getElementsByClassName("share");
pop.innerHTML = "CLICK THE FOLLOWING ICONS TO SHARE";
function popup(){
    
    var img = document.createElement('img');
    var images= ["images/icon-facebook.svg","images/icon-pinterest.svg","images/icon-twitter.svg"]

    for (var i;images.length;i++){
        img.setAttribute("src",images[i]);
    }
    document.getElementById("body").appendChild(img);
}

function fnBuildTopMenu(cIn){
    var myImg="/images/";
    var cTemp = "";
    cTemp = cTemp + "<td><img src=" + myImg +"_icon-facebook.svg></td>";
    cTemp = cTemp + "<td><img src=" + myImg +"_icon-pinterest></td>";
    cTemp = cTemp + "<td><img src=" + myImg + "_icon-twitter.svg></td>";
   /// cTemp = cTemp + "<td><img src=" + myImg + "_04.jpg></td>";
}