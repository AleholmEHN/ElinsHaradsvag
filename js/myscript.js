

        $(document).ready(function() {
                $menuLeft = $('.pushmenu-left');
                $nav_list = $('#nav_list');
                 
                $nav_list.click(function() {
                        $(this).toggleClass('active');
                        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
                        $menuLeft.toggleClass('pushmenu-open');
                });
        });


/*var bestHeight = "100px";

function GetSize(pic1)
{
    var p1 = document.getElementById(pic1);
    bestHeight = p1.height + "px";
 
    p1.style.height = bestHeight;
    // Bild height
    var p3 = document.getElementById('bild1');
    var bildHeight = p1.height + 6;     // Dubbel marginal, uppe och nere
    bildHeight += "px";

    p3.style.height = bildHeight;
    p3 = document.getElementById('bild2');
    p3.style.height = bildHeight;
    p3 = document.getElementById('bild3');
    p3.style.height = bildHeight;



}

function SetSize(pic2)
{
    var p2 = document.getElementById(pic2);
    p2.style.height = bestHeight;
     
}*/

function fixPicSize()
{
    var p1 = document.getElementById('left_pic');
    var picHeight = p1.height + "px";
    var bildHeight = p1.height + 6 + "px";
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

function KartSize(pic3)
{
    var p3 = document.getElementById(pic3);
    p3.style.height = totalHeight + "px";
}
