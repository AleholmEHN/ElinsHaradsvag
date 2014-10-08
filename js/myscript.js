

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
    p1 = document.getElementById('slider');
    p1.style.height = picHeight;
    
}

function KartSize(pic3)
{
//    alert("Height: " + totalHeight);
    var p3 = document.getElementById(pic3);
    p3.style.height = (totalHeight - 500) + "px";
    p3.style.width= (totalWidth - 50) + "px";
}
