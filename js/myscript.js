

        $(document).ready(function() {
                $menuLeft = $('.pushmenu-left');
                $nav_list = $('#nav_list');
                 
                $nav_list.click(function() {
                        $(this).toggleClass('active');
                        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
                        $menuLeft.toggleClass('pushmenu-open');
                });
        });


var bestHeight = "100px";

function GetSize(pic1)
{
    var p1 = document.getElementById(pic1);
    bestHeight = p1.height + "px";
    var slider = document.getElementById(slider);
    slider.style.height = bestHeight;
    var b1 = document.getElementById(bild1);
    bild1.style.height = bestHeight;
    bild1.style.marginBottom = 0;
    bild1.style.paddingBottom = 0;

}

function SetSize(pic2)
{
    var p2 = document.getElementById(pic2);
    p2.style.height = bestHeight;
     
}

function KartSize(pic3)
{
    var p3 = document.getElementById(pic3);
    p3.style.height = totalHeight + "px";
}
