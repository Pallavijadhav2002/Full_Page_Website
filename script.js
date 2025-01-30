const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for(let i=0; i<indicatorImages.length; i++){
  indicatorImages[i].addEventListener("click", function(){

    for(let j=0; j<indicatorImages.length; j++){
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id=this.getAttribute("data-id");
    for(let j=0; j<slides.length; j++){
      slides[j].classList.remove("active");
    }

    slides[id].classList.add("active");
  })
}
window.onscroll = function () {
  updateProgressBar();
};

function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = scrollPercentage + "%";
}
