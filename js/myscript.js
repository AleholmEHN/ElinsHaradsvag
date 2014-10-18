

$(document).ready(function() {
            
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#nav_list');
                 
    $nav_list.click(function() {
        $(this).toggleClass('active');
        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open'); 
    });
});



function fixPicSize()
{    
    var p1 = document.getElementById('left_pic');
    var picHeight = p1.height + "px";
    var bildHeight = p1.height + 6+ "px";

    p1.style.height = picHeight;

    p1 = document.getElementById('slider');
    p1.style.height = picHeight;
    
    p1 = document.getElementById('middle_pic');
    p1.style.height = picHeight;

    
    p1 = document.getElementById('right_pic');
    p1.style.height = picHeight;
    
    p1 = document.getElementById('bild1');
    p1.style.height = bildHeight;

    p1 = document.getElementById('bild2');
    p1.style.height = bildHeight;

    p1 = document.getElementById('bild3');
    p1.style.height = bildHeight;
    
}

function KartSize()
{

//alert(window.innerHeight);
    var p3 = document.getElementsByClassName('imageMap');
 //   alert(window.innerHeight);
    //var p3 = document.getElementById('imageMap');
//    var myH = 0;
//    myH = p3.height;
//    alert("my h: " + 10);
    var p4 = document.getElementsByClassName('buttonset');
    //var h = parseInt(p4.height) + "px";
    //alert(h);
    
    var p5 = document.getElementById('nav_list');
//    alert(p5.height);
    //var btnH = p4.style.height;

/*    var newH = window.innerHeight - p4.height;
    newH += "px";
    alert("new h " + newH);
    p3.removeAttribute("height");
    p3.style.height = newH;*/

}
