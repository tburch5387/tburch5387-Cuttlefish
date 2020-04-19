//function to adjust header based on screensize and scroll


function headScroll(screen) {
    if (screen.matches) {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("primaryLogo").style.padding = "5px 10px";
        // document.getElementById("primaryLogo").style.fontSize = "1.5em";
        document.getElementById("primaryLogo").innerHTML = "cuttlefish";
        document.getElementById("header").style.backgroundColor ="rgba(56, 38, 40, 1)";
        } else {
        document.getElementById("primaryLogo").style.padding = "10px";
        // document.getElementById("primaryLogo").style.fontSize = "2em";
        document.getElementById("primaryLogo").innerHTML = "cuttlefish creative";
        document.getElementById("header").style.backgroundColor ="black";
        
        }
  }
  else {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("primaryLogo").style.padding = "5px 10px";
    document.getElementById("primaryLogo").style.fontSize = "1.5em";
    document.getElementById("primaryLogo").innerHTML = "cuttlefish";
    document.getElementById("header").style.backgroundColor ="rgba(56, 38, 40, 1)";
    } else {
    document.getElementById("primaryLogo").style.padding = "10px";
    document.getElementById("primaryLogo").style.fontSize = "2em";
    document.getElementById("primaryLogo").innerHTML = "cuttlefish creative";
    document.getElementById("header").style.backgroundColor ="rgba(56, 38, 40, 1)";    
    }
}
}

window.onscroll = function() {headScroll(screen)};

var screen = window.matchMedia("(max-width: 768px)")
screen.addListener(headScroll) 


//open and close nav on screens less than 1000 px for tablets/phones
function openSide() {
    document.getElementById("mobileNav").style.width = "300px";
  }

//close
  function closeSide() {
    document.getElementById("mobileNav").style.width = "0";
}

//close menu if click outside
  window.addEventListener('mouseup', function(){
        var menu = document.getElementById("mobileNav");
        if(event.target != menu) {menu.style.width ="0";

        }
  });


//flickity gallery
  $('.main-gallery').flickity({
    // options
    cellAlign: 'center',
    wrapAround: true,
    watchCSS: true,
    pageDots:false,
 
  });

//single column resume for small screens
  var screen2 = window.matchMedia("(max-width: 768px)")
screen2.addListener(mobileRes) 

  function mobileRes(screen2) {
    if (screen2.matches) {
      document.getElementById(`resume`).href = "assets/tburch_web_single_column.pdf";
    }
  }

//intercept google form - script from https://googleformrestyler.apixml.net/

// var ifrm = document.createElement("iframe");
// ifrm.setAttribute("name", "swallow");
// document.body.appendChild(ifrm);
// ifrm.style.display = 'none';
// document.forms[0].target="swallow";
// var button = document.querySelectorAll("div[role='button']")[0];
// button.addEventListener("click", function()
// {
// 	alert = `intercept`
// }, true); 


// jquery function to make overlay visible on click - 

if 
  ($(window).width() < 768) {$('.changing').on('click', function() {
    $(this).toggleClass('hoverlay hoverlayClick');
});
};

//ultimately would like to make this pure js and click anywhere to close. I'm out playing my knowledge...

