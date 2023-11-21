window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let imgCont = document.querySelector(".titulo-container");
    let headerCont = document.querySelector("#h-container");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerCont.style.padding = "5px 50px 15px 50px";
    imgCont.style.top = "8px";
    imgCont.style.height = "69px";
    imgCont.style.width = "135px";
  } else {
    headerCont.style.padding = "15px 50px";
    imgCont.style.top = "100%";
    imgCont.style.height = "301px";
    imgCont.style.width = "590px";
  }
}