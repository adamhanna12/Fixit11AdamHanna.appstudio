let dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keyline Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
      drpDesserts.clear()   
  for (i = 0; i <= dessertList.length; i++) {
  drpDesserts.addItem(dessertList[i])
  }
}

drpDesserts.onclick=function(){
 if (typeof(x) == "object")   
      return
  else 
      drpChoices = x
      lblDessert.value = "You picked" + " " + drpChoices.selection + "-that is a great choice!"
}

btnNextForm2.onclick=function(){
  ChangeForm(describeYou)
}
