function kt(element) {
  if (element.value == "") {
      element.style.border = '1px solid red'
      return true
  }

  element.style.border = ''
  return false
} 
function getInfo ()
{
  var HoTen = document.getElementById('HoTen')
  var SoDT = document.getElementById('SoDT')
  var Email = document.getElementById('Email')
  var message = document.getElementById('message')
  if(HoTen !=undefined && SoDT !=undefined && Email !=undefined && message !=undefined){
    if(kt(HoTen)==true|| kt(SoDT)==true || kt(Email)==true || kt(message)==true)
      return

   if (HoTen.value=="") {
      HoTen.style.border = '1px solid red'
      return
    }else
      HoTen.style.border = ''


    if (SoDT.value=="") {
      SoDT.style.border = '1px solid red'
      return
      }else
        SoDT.style.border = ''

    if (Email.value=="") {
      Email.style.border = '1px solid red'
      return
      }else
        Email.style.border = ''

    if (message.value=="") {
      message.style.border = '1px solid red'
      return
      }else
        message.style.border = ''
      
    }
  
  }