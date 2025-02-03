function wish() {
  var now = new Date();
  const hr = now.getHours();
  var w = 'Evening';
  if (5 <= hr && hr <= 12) {
    w = "Morning" ;
  }
  else if (13 <= hr && hr <= 18) {
    w = "Afternoon" ;
  }
  else if (19 <= hr && hr <= 24) {
    w = "Evening" ;
  }  
  document.getElementsByClassName('wish')[0].innerHTML = "Good " + w ;
}

wish()

var sidebar = false;
function toggleSidebar() {
  if (sidebar == false) {
    // document.getElementsByClassName('nav-profile')[0].style.marginTop = '100px' ;
    document.getElementsByClassName("profile-info")[0].style.display = "none";
    var elementArray = document.getElementsByClassName("btn-text");
    for (var i = 0; i < elementArray.length; ++i) {
      document.getElementsByClassName("btn-text")[i].style.display = "none";
    }
    document.getElementsByClassName("nav-container")[0].style.width = "50px";
    sidebar = true;
  } else {
    // document.getElementsByClassName('nav-profile')[0].style.marginTop = '50px' ;
    document.getElementsByClassName("profile-info")[0].style.display = "block";
    document.getElementsByClassName("nav-container")[0].style.width = "300px";
    var elementArray = document.getElementsByClassName("btn-text");
    for (var i = 0; i < elementArray.length; ++i) {
      document.getElementsByClassName("btn-text")[i].style.display = "inline";
    }
    sidebar = false;
  }
}
function settingsbar() {
  var bar = document.getElementsByClassName("settings-list")[0] ;
  if (bar.style.display == "none") {
    bar.style.display = "inline-block";
    document.getElementsByClassName("fa-solid fa-gear")[0].style.color = "blue";
  }
  else {
    bar.style.display = "none";
    document.getElementsByClassName("fa-solid fa-gear")[0].style.color = "black";
  }
}

function resumebar() {
  var bar = document.getElementsByClassName("resume-list")[0] ;
  if (bar.style.display == "none") {
    bar.style.display = "inline-block";
    document.getElementsByClassName("fa-solid fa-download")[0].style.color = "blue";
  }
  else {
    bar.style.display = "none";
    document.getElementsByClassName("fa-solid fa-download")[0].style.color = "black";
  }
}

function downloadCV() {
  let fileId = "15wUKNAhZ9nIxWgV_Qmd0nQTrjXy1tCi7";
        let downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

        let link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "MyCV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}

var theme = true ;
function themedrop() {
  if (theme == false) {
    document.getElementsByClassName('theme')[0].style.transform = 'rotate(0deg)' ;
    document.getElementsByClassName("theme-bar")[0].style.height = '0px' ;    
    theme = true ;
  }

  else {
    document.getElementsByClassName('theme')[0].style.transform = 'rotate(180deg)' ;    
    document.getElementsByClassName("theme-bar")[0].style.height = '120px' ;       
    theme = false;
  }
}

var font = true ;
function fontdrop() {
  if (font == false) {
    document.getElementsByClassName('font')[0].style.transform = 'rotate(0deg)' ;
    document.getElementsByClassName("font-bar")[0].style.height = '0px' ;    
    font = true ;
  }

  else {
    document.getElementsByClassName('font')[0].style.transform = 'rotate(180deg)' ;    
    document.getElementsByClassName("font-bar")[0].style.height = '100px' ;       
    font = false;
  }
}

const timg = document.getElementsByClassName("body-img");
// var position_body = ;
console.log(timg[0].width)
var position = timg[0].width / 2;
var i = 1;
function imgmoveright() {
  if (i <= timg.length - 1) {
    position -= timg[0].width ;
    document.getElementsByClassName("main-img-body")[0].style.transform = 'translateX('+position+'px)' ;
    i ++ ;
  }
  else {    
    position = timg[0].width / 2 ;
    document.getElementsByClassName("main-img-body")[0].style.transform = 'translateX('+position+'px)' ;    
    i = 1 ;
  }
  console.log(position);
}

function imgmoveleft() {
  console.log(position,i)
  if (i > 1) {
    position += timg[0].width ;
    document.getElementsByClassName("main-img-body")[0].style.transform = 'translateX('+position+'px)' ;
    i -- ;
  }
  else {    
    position = timg[0].width / 2 ;
    document.getElementsByClassName("main-img-body")[0].style.transform = 'translateX('+position+'px)' ;    
    i = 1 ;
  }
}


document.addEventListener('touchmove', function(e) {
  // Your event handler logic here
}, { passive: true });
