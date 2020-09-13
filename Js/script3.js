window.onscroll = function() {
  console.info(document.documentElement.scrollTop);
  var Phul = document.getElementById("myPhuLuc");
  var goto = document.getElementById("gototop");
  var livechat = document.getElementById("livechat");

  if (document.documentElement.scrollTop > 700 || document.body.scrollTop > 700) {
    Phul.style.position = "fixed";
    Phul.style.backgroundColor = "rgb(255, 255, 255, 0.8)"
    Phul.style.zIndex = 9;
    goto.style.display = "block";
    
    
    
  } else {
      Phul.style.position = "relative";
      goto.style.display = "none";
  }

  if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
    livechat.style.display = "block";
  } else {
    livechat.style.display = "none";
  }
}

function goToTop() {
  var timer = setInterval(function() {
      document.documentElement.scrollTop-=17;

      if(document.documentElement.scrollTop <= 0)
          clearInterval(timer);

  })
}




