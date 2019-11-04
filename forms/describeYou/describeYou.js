
rdoPersonType.onclick=function(){
    if (rdoPersonType.value == 0)
      lblResponse1.value= "I would agree that you are a 'Optimistic' person too" 
    else if (rdoPersonType.value == 1)
      lblResponse1.value= "I would agree that you are a 'Pessimistic' person too"
    else if (rdoPersonType.value == 2)
      lblResponse1.value= "I would agree that you are a 'Trusting' person too"
    else if (rdoPersonType.value == 3)
      lblResponse1.value= "I would agree that you are a 'Envious' person too"
}

btnNextForm3.onclick=function(){
  ChangeForm(favExercises)
}

