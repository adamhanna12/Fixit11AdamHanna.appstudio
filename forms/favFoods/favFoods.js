let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
      for (i = 0; i <= goodFoods.length - 1; i++) 
    lgFoods.addItem(goodFoods[i])
}


lgFoods.onclick=function(choice){
    if (typeof(choice) == "object")   // user clicked the control
    return
   
   lblResults.value="You picked " + goodFoods[choice]+ ", that is a great choice!"

}

btnNextForm1.onclick=function(){
  ChangeForm(dessertVoting)
}
