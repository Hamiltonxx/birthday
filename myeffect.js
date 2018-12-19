window.onload = function(){
    document.getElementById("bulb_yellow").classList.add('bulb-glow-yellow');
    document.getElementById("bulb_red").classList.add('bulb-glow-red');
    document.getElementById("bulb_blue").classList.add('bulb-glow-blue');
    document.getElementById("bulb_green").classList.add('bulb-glow-green');
    document.getElementById("bulb_pink").classList.add('bulb-glow-pink');
    document.getElementById("bulb_orange").classList.add('bulb-glow-orange');

    document.body.classList.add('peach');

    setTimeout(function(){
        let iframe = document.createElement("iframe");
        iframe.src="hbd.mp3";
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        let audio = document.createElement("audio");
        audio.src="hbd.mp3";
        audio.autoplay="autoplay";
        audio.loop="loop";
        document.body.appendChild(audio);

        document.getElementById("bulb_yellow").classList.add('bulb-glow-yellow-after');
        document.getElementById("bulb_red").classList.add('bulb-glow-red-after');
        document.getElementById("bulb_blue").classList.add('bulb-glow-blue-after');
        document.getElementById("bulb_green").classList.add('bulb-glow-green-after');
        document.getElementById("bulb_pink").classList.add('bulb-glow-pink-after');
        document.getElementById("bulb_orange").classList.add('bulb-glow-orange-after');

        document.body.classList.add('peach-after');

    }, 15000);

    setTimeout(function(){
        document.querySelector('.bannar').classList.add('bannar-come');
    }, 21000);

    function loopOne() {
        let randleft = 1000*Math.random();
        let randtop = 500*Math.random();
        $("#b1").animate({left:randleft,bottom:randtop},10000,function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop},10000,function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},10000,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},10000,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},10000,function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},10000,function(){
            loopSix();
        });
    }
    function loopSeven() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b7').animate({left:randleft,bottom:randtop},10000,function(){
            loopSeven();
        });
    }

    setTimeout(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
    },27000);

    setTimeout(function(){
        $('.cake').fadeIn('slow');
    },32000);
    setTimeout(function(){
        $('.fuego').fadeIn('slow');
    },35000);

    setTimeout(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22')
        $('#b3').attr('id','b33')
        $('#b4').attr('id','b44')
        $('#b5').attr('id','b55')
        $('#b6').attr('id','b66')
        $('#b7').attr('id','b77')
        $('#b11').animate({top:240, left: vw-350},500);
        $('#b22').animate({top:240, left: vw-250},500);
        $('#b33').animate({top:240, left: vw-150},500);
        $('#b44').animate({top:240, left: vw-50},500);
        $('#b55').animate({top:240, left: vw+50},500);
        $('#b66').animate({top:240, left: vw+150},500);
        $('#b77').animate({top:240, left: vw+250},500);
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);
    },40000);

    setTimeout(function(){
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });
        let i;
        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
            i=i+1;
            $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
            if(i==50){
                $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                    $('.cake').fadeIn('fast');
                });
                
            }
            else{
                msgLoop(i);
            }           

        });
            // body...
        }
        
        msgLoop(0);
    },45000);
}


