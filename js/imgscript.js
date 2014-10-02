var bestHeight = "100px";

function Resize33(pic1)
{
    var p1 = document.getElementById(pic1);
//    var x = p1.width;
    bestHeight = p1.height + "px";
 //   p1.removeAttribute("height");
//    p1.style.height = bestHeight;
//    p1.removeAttribute("width");
//    p1.style.width = "50px";
 //   alert("Get height: " + bestHeight);

}

function Resize34(pic2)
{
//    alert("BestHeight: " + bestHeight);
    var p2 = document.getElementById(pic2);
    p2.removeAttribute("height");
    p2.style.height = bestHeight;
//    p1.removeAttribute("width");
//    p1.style.width = "50px";

}

