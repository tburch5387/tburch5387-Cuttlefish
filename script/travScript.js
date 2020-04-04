//function to adjust header based on screensize and scroll
window.onscroll = function() {this.headScroll(screen)};

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

var screen = window.matchMedia("(max-width: 760px)")
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

