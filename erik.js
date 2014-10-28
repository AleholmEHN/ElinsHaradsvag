    

        $(document).ready(function() {
            
            
            

            $(function() {
    FastClick.attach(document.body);
});

                $menuLeft = $('.pushmenu-left');
                $nav_list = $('#nav_list');
                 
                $nav_list.click(function() {
                        $(this).toggleClass('active');
                        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
                        $menuLeft.toggleClass('pushmenu-open');
                });
            
            // Right menu
                $menuLeft2 = $('.pushmenu2-left');
                $nav_list2 = $('#nav_list2');
                 
                $nav_list2.click(function() {
                        $(this).toggleClass('active');
                        $('.pushmenu2-push').toggleClass('pushmenu2-push-toright');
                        $menuLeft2.toggleClass('pushmenu2-open');
                });

             // Right menu
                $menuLeft3 = $('.pushmenu3-left');
                $nav_list3 = $('#nav_list3');
                 
                $nav_list3.click(function() {
                        $(this).toggleClass('active');
                        $('.pushmenu3-push').toggleClass('pushmenu3-push-toright');
                        $menuLeft3.toggleClass('pushmenu3-open');
                });

           $('.slider').css("top", $("#header_image").height() + 42 + "px");
   
            $("#ruta1").css("top", $("#header_image").height() + $('.slider').height() +42+ "px");
 
            
            $("#appkarta").css("height", ($(window).height() - 42) + "px");
		$("#appkarta").css("width", $(window).width() + "px");

            
            
            
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