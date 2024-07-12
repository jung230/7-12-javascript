$(function(){
    var n = 0 ; // 현재 보여지는 section page 인덱스 번호 0 1 2 3 4
    var moving = false;
    
    
    $("html, body").on("mousewheel DOMMouseScroll", function(e){
        // console.log(e);
        
        
        var delta = e.originalEvent.wheelDelta; // mousewheel 크롬 엣지 오페라 
        console.log(delta); // -120(down) +120(up)
        
        var detail = e.originalEvent.detail; // DOMMouseScroll 파이어폭스
        console.log(detail); // 3(down) -3(up)

        if(moving == false){
            moving = true;
            

        var h = $(window).innerHeight();
        console.log("h : ", h);
            
        var con_top = $(".container").offset().top;
        console.log("con_top", con_top);

                // -120         3 mouse down
        if( delta < 0 || detail >0 ) {

            if(n < 4){
                n++;
                con_top -= h;
            }//if(n<4)
            
            // console.log("con_top 1 :", con_top);


        }else if( delta > 0 || detail > 0 ){
                    //  + 120          -3  mouse up
                    if(n>0){
                        n--;
                        con_top += h;
                    }//if(n>0)

            // con_top += h;
            console.log("con_top 2 :", con_top);
        

        }// if up down

        console.log("n : ", n)
        console.log("con_top 1 : ", con_top)

        }//moving false
        
        $(".container").animate({top: con_top }, 500, function(){
            moving = false; 

            $(".btn_group li").removeClass("on");
            $(".btn_group li").eq(n).addClass("on");

            if( n != 0){
                $(".fix_nav").addClass("on");
                $(".nav").addClass("on");
            }else{
                $(".fix_nav").removeClass("on");
                $(".nav").removeClass("on");
            }//
            
        })//
    })//mousewheel DOMMouseScroll

    $(".nav a, .fix_nav a, .btn_group a").click(function(){
        n = $(this).parent().index();

        if( n != 0){
            $(".fix_nav").addClass("on");
            $(".nav").addClass("on");
        }else{
            $(".fix_nav").removeClass("on");
            $(".nav").removeClass("on");
        }//
        
        $(".btn_group li").removeClass("on")
        $(".btn_group li").eq(n).addClass("on")

        var con_top = -n * $(window).innerHeight();
        $(".container").animate({top: con_top }, 500)
        
    })//click

    
    

    $(window).resize(function(){
        resize();
    })


    function resize(){
        var con_top = - n * $(window).innerHeight();
        $(".container").css({top : con_top })
        $(".container .page").css({width: window.innerWidth , height: window.innerHeight })
    }




})//jquery