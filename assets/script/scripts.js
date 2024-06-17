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
  }
  else {
    bar.style.display = "none";
  }
}

function resumebar() {
  var bar = document.getElementsByClassName("resume-list")[0] ;
  if (bar.style.display == "none") {
    bar.style.display = "block";
  }
  else {
    bar.style.display = "none";
  }
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
    document.getElementsByClassName("theme-bar")[0].style.height = '100px' ;       
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