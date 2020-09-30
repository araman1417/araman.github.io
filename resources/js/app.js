'use strict';
console.log('Here\'s a hidden message');
// This is a single-line comment.

/* Here's a
multi-line
comment.*/

/* CSS comments are just like multi-line JavaScript ones.*/



// console.log('This code is no longer active')


    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $('#navNameButton').on('click', function () {
        if (window.matchMedia("(min-width: 765px)").matches) {
            console.log("Screen width is at least 500px");
        }
        else{
            document.getElementById('left').style.width="0%";
            document.getElementById('right').style.width="100%";
            document.querySelector('.top-right').style.display="inline";
            console.log("Screen width is not least 500px");
        }
    });

    $('#mobileTopButton').on('click', function () {
        if (window.matchMedia("(min-width: 765px)").matches) {
            console.log("Screen width is at least 500px");
        }
        else{
            document.getElementById('left').style.width="20%";
            document.getElementById('right').style.width="80%";
            document.querySelector('.top-right').style.display="none";
            console.log("Screen width is not least 500px");
        }
    });
    
        /*
    window.addEventListener("resize", function() {
        if (window.matchMedia("(min-width: 765px)").matches) {
            //screen size is greater than an ipad
            console.log("Screen width is at least 500px")
         //
        } else {
            $('#navNameButton').on('click', function () {
                console.log("Screen width is not least 500px")
                $(document).getElementById('left').style.width="0%!important";
                $(document).getElementById('right').style.width="100%!important";

            });
        }
       })
       */