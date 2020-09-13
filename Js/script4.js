$(document).ready(function() {
    $(".thumbnail img").click(function() {
        $("#mainImg").attr("src", $(this).attr("src"))
    })
    $(".buttons img").click(function() {
        var c = $(this).attr('data')
        $("#mainImg").attr("src", `image/cv1_${c}_new.png`)

        var images = $(".thumbnails img")
        for(var i = 0; i < images.length; i++)
            $(images[i]).attr('src', `image/cv${i+1}_${c}_new.png`)
    })

    $(".thumbnails img").click(function() {
        $("#mainImg").attr("src", $(this).attr("src"))
    })
    
    $(".thumbnail img").mouseenter(function() {
        $(this).css("background-color", "rgba(0,60,255,0.6)")
    })
})
window.onscroll = function() {
    console.info(document.documentElement.scrollTop);
    var goto = document.getElementById("gototop");
    var menu = document.getElementById("menufixed");
    var livechat = document.getElementById("livechat");
    if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
      goto.style.display = "block";

      menu.style.position ="fixed";
      menu.style.left = 0;
      menu.style.right = 0;
      menu.style.opacity = 0.6;
      menu.style.zIndex = 9;

      livechat.style.display = "block"
    } else {
        menu.style.opacity = 1;
        goto.style.display = "none";
        livechat.style.display = "none"
    }
 
  }
  function goToTop() {
        var timer = setInterval(function() {
            document.documentElement.scrollTop-=17;

            if(document.documentElement.scrollTop <= 0)
                clearInterval(timer);

        })
}