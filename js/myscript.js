

$(document).ready(function() {
                $menuLeft = $('.pushmenu-left');
                $nav_list = $('#nav_list');
                 
                $nav_list.click(function() {
                        $(this).toggleClass('active');
                        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
                        $menuLeft.toggleClass('pushmenu-open');
                });
});


/*function Resize(picture)
{
    var p1 = document.getElementById(picture);
    var x = p1.width;
    var newH = x*132/200;
    p1.height = newH;
}*/

/*

function Resize33(pic1)
{
    var p1 = document.getElementById(pic1);
//    alert("Old h: " + p1.height);
    newH = p1.height;
    //  p1.style.height = 500;
    

}

function Resize34(pic2)
{
    var p2 = document.getElementById(pic2);
/*    var x = p1.width;
    newH = x*132/200; *//
//    alert("kyrka h: " + p2.height + " new h: " + newH);
 /*   p2.height = newH;
}*/

/*function Test()
{
    alert("Testar");
} */


