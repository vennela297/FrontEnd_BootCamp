//Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

var mostExpensive1 = {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
  }

  var mostExpensive2 ={
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  }


  function mostExpensive(menu) 
  {
    let greatest=0
    let item=""
    for(const key in menu)
    {
        if(menu[key]>greatest)
        {
            greatest=menu[key]
            item=key

        }
        
        

    }
    return item

  }
  
  console.log(`The most expensive one is ${mostExpensive(mostExpensive1)}`);

  console.log(`The most expensive one is ${mostExpensive(mostExpensive2)}`);
  