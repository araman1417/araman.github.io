'use strict';

/**
 * @description setting up global variable to track navigation states
 */
var width = $(window).width();
var smallNav= false;
var active = false;
var mobilenav = false;
var topNav = false;//inverted

/**
 * @desc Media query handler sets up screen width threshold
 * calls WidthChange fn
 */
if (matchMedia) {
    //set the min width of the screen to be detected as 765px
    const mq = window.matchMedia("(min-width: 765px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    }
    
/** 
 * @param {var} mq -created in if statement above
 * media query change changes how the navigation works
 */
function WidthChange(mq) {
    if (mq.matches) {
        // window width is at least 765px
        console.log("Screen width is greater 765px");
        topNav=false;
        if(!Boolean(active)&&Boolean(smallNav)&&!Boolean(mobilenav)){
            $('#left').removeClass('active');
            $('#right').removeClass('active');
            $('.top-right').removeClass('active');
            $('.navbar-nav li img').toggleClass('active');
            $('.navbar-brand h1').toggleClass('active');
            $('.navbar-brand strong').toggleClass('active');
            $('.navbar-brand button').toggleClass('active');
            $('.nav-name').toggleClass('active');
            $('.navbar-nav li').toggleClass('active');
            active=!active;
            smallNav=!smallNav;
            console.log("active: ",active);    
            console.log("SmallNav: ",smallNav);
            console.log("mobileNav: ",mobilenav);
            console.log("TopNav: ",topNav); 
        }

        if(Boolean(active)&&!Boolean(smallNav)&&!Boolean(mobilenav)){
            $('.top-right').removeClass('active');
            active=!active;
            console.log("active: ",active);    
            console.log("SmallNav: ",smallNav); 
            console.log("mobileNav: ",mobilenav);
            console.log("TopNav: ",topNav); 
        }

        if(Boolean(active)&&Boolean(mobilenav)){
            $('#left').removeClass('active');
            $('#right').removeClass('active');
            $('.top-right').removeClass('active');
            active=!active;
            mobilenav=!mobilenav;
            console.log("active: ",active);    
            console.log("SmallNav: ",smallNav); 
            console.log("mobileNav: ",mobilenav);
            console.log("TopNav: ",topNav);  
        }

    } 
    else {
        // window width is less than 765px
        if(Boolean(active)&&Boolean(smallNav)&&!Boolean(mobilenav)){
            $('#left').removeClass('active');
            $('#right').removeClass('active');
            $('.top-right').toggleClass('active');
            $('.navbar-nav li img').toggleClass('active');
            $('.navbar-brand h1').toggleClass('active');
            $('.navbar-brand strong').toggleClass('active');
            $('.navbar-brand button').toggleClass('active');
            $('.nav-name').toggleClass('active');
            $('.navbar-nav li').toggleClass('active');
            active=!active;
            smallNav=!smallNav;
            console.log("active: ",active);    
            console.log("SmallNav: ",smallNav);
            console.log("mobileNav: ",mobilenav);
            console.log("TopNav: ",topNav);
        }

        if(Boolean(active)&&Boolean(smallNav)){
            console.log("Screen width is less 765px");
            $('#left').toggleClass('active');
            $('#right').toggleClass('active');
            $('.top-right').toggleClass('active');
            active=!active;
            topNav=!topNav;
            smallNav=!smallNav;
            console.log("active: ",active);
            console.log("SmallNav: ",smallNav);
            console.log("mobileNav: ",mobilenav);
            console.log("TopNav: ",topNav);      
        }

        if(Boolean(active)&&!Boolean(topNav)){
            console.log("Screen width is less 765px");
            $('.top-right').toggleClass('active');
            active=!active;
            topNav=!topNav;
            console.log("active: ",active);
            console.log("SmallNav: ",smallNav);
            console.log("mobileNav: ",mobilenav);
            console.log("TopNav: ",topNav);  
        }

    }
}

/**
 * @description Button click event when Name is clicked
 */
$('#navNameButton').on('click', function () {
    console.log("State Change");
    if (window.matchMedia("(min-width: 765px)").matches) {
        console.log("Screen width is at least 765px button click");
        active=!active;
        smallNav=!smallNav;
        console.log("active: ",active);    
        console.log("SmallNav: ",smallNav);
        console.log("mobileNav: ",mobilenav);
        console.log("TopNav: ",topNav);

        $('#left').toggleClass('active');
        $('#right').toggleClass('active');
        $('.top-right').toggleClass('active');
        $('.navbar-nav li img').toggleClass('active');
        $('.navbar-brand h1').toggleClass('active');
        $('.navbar-brand strong').toggleClass('active');
        $('.navbar-brand button').toggleClass('active');
        $('.nav-name').toggleClass('active');
        $('.navbar-nav li').toggleClass('active');
    
    }
    else{
        console.log("Screen width is at least 765px button click");
        active=!active;
        mobilenav=!mobilenav;
        topNav=!topNav;
        console.log("active: ",active);    
        console.log("SmallNav: ",smallNav);
        console.log("mobileNav: ",mobilenav);
        console.log("TopNav: ",topNav);
        $('#left').toggleClass('active');
        $('#right').toggleClass('active');
        $('.top-right').toggleClass('active');

    }
});

/**
 * @description Button click event when Icon is clicked
 * Only active when Screen < @param{mq}
 */
$('#mobileTopButton').on('click', function () {
    if (window.matchMedia("(min-width: 765px)").matches) {
        console.log("Screen width is at least 500px");
    }
    else{
        console.log("Screen width is less 765px button click");
        $('#left').toggleClass('active');
        $('#right').toggleClass('active');
        $('.top-right').toggleClass('active');
        active=!active;
        mobilenav=!mobilenav;
        topNav=false;
        console.log("active: ",active);    
        console.log("SmallNav: ",smallNav);
        console.log("mobileNav: ",mobilenav);
        console.log("TopNav: ",topNav);
    }
});
