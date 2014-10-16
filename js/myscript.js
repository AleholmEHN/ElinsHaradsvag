
$(function() {
    FastClick.attach(document.body);
});
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

    // Prova fixa Samsung problem i kod
    
    p1 = document.getElementById('bild2');
    p1.style.height = bildHeight;
    p1.style.borderLeft = "3px";
    p1.style.borderRight = "3px";
    p1.style.borderColor = "red";
    
    p1 = document.getElementById('bild3');
    p1.style.height = bildHeight;
    p1.style.borderLeft = "0 px";
    p1.style.borderRight = "0px";
    p1.style.borderColor = "blue";
    
    // Prova fixa Samsung problem i kod
    
}

function KartSize(pic3)
{

    var p3 = document.getElementById(pic3);
    alert("curr h: " + p3.height);
/*    var p4 = document.getElementById('buttonSet');
    alert("buttonset h: " + p4.style.height);
    var newH = window.innerHeight - p4.height;
    newH += "px";
    alert("new h " + newH);
    p3.removeAttribute("height");
    p3.style.height = newH;*/

}
