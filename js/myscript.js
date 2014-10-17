
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

$(function()
{
    var image_is_loaded = false;
    $("#karta").load(function() {
        $(this).data('width', $(this).attr('width')).data('height', $(this).attr('height'));
        $($(this).attr('usemap')+" area").each(function(){
            $(this).data('coords', $(this).attr('coords'));
        });

        $(this).css('width', '100%').css('height','auto').show();

        image_is_loaded = true;
        $(window).trigger('resize');
    });


    function ratioCoords (coords, ratio) {
        coord_arr = coords.split(",");

        for(i=0; i < coord_arr.length; i++) {
            coord_arr[i] = Math.round(ratio * coord_arr[i]);
        }

        return coord_arr.join(',');
    }
    $(window).on('resize', function(){
        if (image_is_loaded) {
            var img = $("#karta");
            var ratio = img.width()/img.data('width');

            $(img.attr('usemap')+" area").each(function(){
                console.log('1: '+$(this).attr('coords'));
                $(this).attr('coords', ratioCoords($(this).data('coords'), ratio));
            });
        }
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
/*    p1.removeAttribute(p1.style.border.borderLeft);
    p1.removeAttribute(p1.style.border.borderRight);
    p1.style.borderLeft = "10 px";
    p1.style.borderRight = "10 px";
 
    p1.style.borderColor = "red";*/
    
    p1 = document.getElementById('bild3');
    p1.style.height = bildHeight;
/*    p1.removeAttribute(p1.style.border.borderLeft);
    p1.removeAttribute(p1.style.border.borderRight);
    p1.style.borderLeft = "10px";
    p1.style.borderRight = "10px";
    p1.style.borderColor = "blue";*/
    
    // Prova fixa Samsung problem i kod
    
}

function KartSize()
{

    alert(window.innerHeight);
/*    var p3 = document.getElementById('karta');
    var myH = 0;
    if (p3 != 0)        
        myH = p3.style.height;
    alert("my h: " + myH);
/*    var p4 = document.getElementById('buttonSet');
    var btnH = p4.style.height;
    alert("buttonset h: " + p4.style.height);
/*    var newH = window.innerHeight - p4.height;
    newH += "px";
    alert("new h " + newH);
    p3.removeAttribute("height");
    p3.style.height = newH;*/

}
