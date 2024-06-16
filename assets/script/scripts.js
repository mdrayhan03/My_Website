var click = false;
function toggleSidebar() {
  if (click == false) {
    // document.getElementsByClassName('nav-profile')[0].style.marginTop = '100px' ;
    document.getElementsByClassName("profile-info")[0].style.display = "none";
    var elementArray = document.getElementsByClassName("btn-text");
    for (var i = 0; i < elementArray.length; ++i) {
      document.getElementsByClassName("btn-text")[i].style.display = "none";
    }
    document.getElementsByClassName("nav-container")[0].style.width = "50px";
    click = true;
  } else {
    // document.getElementsByClassName('nav-profile')[0].style.marginTop = '50px' ;
    document.getElementsByClassName("profile-info")[0].style.display = "block";
    document.getElementsByClassName("nav-container")[0].style.width = "300px";
    var elementArray = document.getElementsByClassName("btn-text");
    for (var i = 0; i < elementArray.length; ++i) {
      document.getElementsByClassName("btn-text")[i].style.display = "inline";
    }
    click = false;
  }
}
