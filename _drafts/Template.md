---
title: "Title"
tags: Sourdough
---
Factoids

# Time
Total: x hours
- y h
- z h

Number of fougasse: <input type="number" min="1" max="10" id="numBread" value="2" placeholder = "2" onclick="calculateRecipe(this.value, this.placeholder)">

# Ingredients
<script> 
  function calculateRecipe(numBread, defaultNumBread) 
  { 
  // The placeholders hold the quantity of that ingredient.
  document.getElementById("flour").value = numBread / defaultNumBread * document.getElementById("flour").placeholder
  document.getElementById("water").value = numBread / defaultNumBread * document.getElementById("water").placeholder
  document.getElementById("salt").value = numBread / defaultNumBread * document.getElementById("salt").placeholder
  document.getElementById("yeast").value = numBread / defaultNumBread * document.getElementById("yeast").placeholder
  document.getElementById("olive_oil").value = numBread / defaultNumBread * document.getElementById("olive_oil").placeholder
  document.getElementById("chopped_rosemary").value = numBread / defaultNumBread * document.getElementById("chopped_rosemary").placeholder
  document.getElementById("chopped_sage").value = numBread / defaultNumBread * document.getElementById("chopped_sage").placeholder
  document.getElementById("chopped_thyme").value = numBread / defaultNumBread * document.getElementById("chopped_thyme").placeholder
  } 
</script> 

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Quantity</th>
<th align="left">Ingredient</th>
</tr>
</thead>
<tbody>
<tr>
<td markdown="span"><input type="text" id="flour" name="All-purpose flour" placeholder="500" readonly> g
  </td>
<td markdown="span">All-purpose flour
  </td>
</tr>
<tr>
<td markdown="span"><input type="text" id="water" name="Warm water" placeholder="350" readonly> mL
  </td>
<td markdown="span">Warm water
  </td>
</tr>
<tr>
<td markdown="span"><input type="text" id="yeast" name="Active dry yeast" placeholder="7" readonly> g
  </td>
<td markdown="span">Yeast
  </td>
</tr>
<tr>
<td markdown="span"><input type="text" id="salt" name="Fine salt" placeholder="10" readonly> g
  </td>
<td markdown="span">Fine salt
  </td>
</tr>
<tr>
<td markdown="span"><input type="text" id="olive_oil" name="Olive oil" placeholder="10" readonly> g
  </td>
<td markdown="span">Olive oil, plus more for topping the bread
  </td>
</tr>
</tbody>
</table>

# Method
Prepare:
12 hours in advance, make the poolish.

1. When your poolish is ready, add 3/4 of the rest of the water (150 g) to the poolish and mix.
{% capture details %}![Image of ripe poolish](/assets/ciabatta/poolish.jpg){% endcapture %}
{% capture summary %}Here's an accordion{% endcapture %}
{% include details.html %}
{:start="2"}
2. Mix in the salt.

# Result
![Rosemary topped focaccia](/assets/focaccia/rosemary_focaccia.jpg)

[See method](#method)
