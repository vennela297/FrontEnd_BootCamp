var bItems;
window.onload = getBold_items();
 
// Collect all <strong> tags
function getBold_items() 
{
  bItems = document.getElementsByTagName('strong'); 
}
// iterate all bold tags and change color  
function highlight() 
{
   for (var i=0; i<bItems.length; i++)
   {                                                    
    bItems[i].style.color = "red";
    }
}

// On mouse out highlighted words become black
function normal()
{
  for (var i=0; i<bItems.length; i++) 
  {
       bItems[i].style.color = "black";
  }
}