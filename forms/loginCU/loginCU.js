
loginCU.onshow=function(){
   req1=Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php","POST","j_usename="+inptNetID.value+"%j_password="+inptPassword.value) 
}

btnLogin.onclick=function(){
      req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200) 
        if(req1.responseText == 1)
              ChangeForm(favFoods)
         
    
        else if(req1.responseText == 0){
            inptNetID.value = ""
            inptPassword.value = ""
            NSB.MsgBox("Login Not Valid, Try Again")     
    }
    else {
        NSB.MsgBox("Who are you")
    }
}


btnNextForm.onclick=function(){
  ChangeForm(favFoods)
}


