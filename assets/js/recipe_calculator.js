<input type="number" min="0" max="10" id="numBread" value="1" placeholder = "1" onclick="calculateRecipe(this.value, this.placeholder)">
  

  function calculateRecipe(numBread, defaultNumBread) 
  {
  calculateIngredientQuantity(numBread, defaultNumBread, "ap_flour")
  calculateIngredientQuantity(numBread, defaultNumBread, "bread_flour")
  calculateIngredientQuantity(numBread, defaultNumBread, "water")
  calculateIngredientQuantity(numBread, defaultNumBread, "salt")
  calculateIngredientQuantity(numBread, defaultNumBread, "levain")
  calculateIngredientQuantity(numBread, defaultNumBread, "olive_oil")
  } 
  
  function calculateIngredientQuantity(numBread, defaultNumBread, id) 
  { 
  // The placeholders hold the quantity of that ingredient.
  document.getElementById(id).value = numBread / defaultNumBread * document.getElementById(id).placeholder
  }
