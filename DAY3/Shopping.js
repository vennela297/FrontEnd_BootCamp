var cart1= { "Shampoo": 5.99, "Rubber Ducks": 15.99 };
var cart2={ "Flatscreen TV": 399.99 };
var cart3={ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 };


function IsFreeShipping(cart) {
    let sum=0
    for(const key in cart)
    {
      sum=sum+cart[key]
    }
    if(sum>50)
    {
        return true
    }
    return false
}

console.log(IsFreeShipping(cart1))
console.log(IsFreeShipping(cart2))
console.log(IsFreeShipping(cart3))