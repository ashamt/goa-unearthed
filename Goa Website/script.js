let img = document.querySelectorAll(".banner-img")
    let ten = 0
    let txt = document.querySelector(".banner-text")
    console.log(img[0])
    setInterval
      (function() {
      if (ten>img.length-1) {
        ten=0
      }
      if(ten>0) {
        img[ten].classList.add("active")
        img[ten-1].classList.remove("active")
      }
      else {
        img[ten].classList.add("active")
        img[img.length-1].classList.remove("active")
      }
      ten++

      }, 3000)

      setTimeout(function(){
      txt.classList.remove("active")
      }, 6000); 
      