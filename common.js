
$(function($) {
  funScroll();
});

   
//首页产品介绍的图片滚动和按钮点击滚动
function funScroll(){    
    var i=0;
    var r=0;
    var phoneLI = $(".imgHolder .imgScroll ul>li");
    var phoneLiLen = phoneLI.length;
    var phoneLiW = phoneLI.width();
    var imgSroll = $(".imgHolder .imgScroll ul");
    imgSroll.width(phoneLiLen*phoneLiW);
    var btn = $(".minNav ul li");
    var btnLen=btn.length;   
    var scrollUl=$(".minNav ul")    
    var btnW=btn.outerWidth(true);
    var btnLen5=Math.ceil(btn.length/4);
    var btnLen5w=btnW*4;
    var prevBtn=$('.minNav .scrollBtn a.prev');
    var nextBtn=$('.minNav .scrollBtn a.next');    
    $(".minNav .scrollBox ul").width(btnLen*btnW);

    btn.each(function(index) {			
        $(this).live('click',function() {
            i = index;
            var key_id=btn.eq(index).attr("key");   

                    $(".title_zw").html($(this).find('.xtitle_zw').html());                
                    $(".desc").html($(this).find('.xdesc').html());	
                    
        });
    }).eq(0).trigger("click");

    prevBtn.bind('click',function(){       
        prev();
        btnScroll();
    });
    nextBtn.bind('click',function(){
        next();
        btnScroll();
    });
    function next() {
        r++;
        if (r == btnLen5) {
            r = 0
        }
    }
    function prev() {
        r--;
        if (r < 0) {
            r = btnLen5 - 1
        }
    }
    function btnScroll(){
        scrollUl.stop().animate({
                'margin-left': -btnLen5w * r + 'px'
            },
            1000);
    }
  
}





