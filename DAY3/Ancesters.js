var male = {
 
"-3":"great grandfather",

"-2":"grandfather",

"-1":"father",

"0":"me!",

"1":"son",

"2":"grandson",

"3":"great grandson"
};

var female = {
 
    "-3":"great grandmother",
    
    "-2":"grandmother",
    
    "-1":"mother",
    
    "0":"me!",
    
    "1":"daughter",
    
    "2":"granddaughter",
    
    "3":"great granddaughter"
    };
    

function generation(str,gender) {
    if(gender=="F")
    {
        return female[str]
    }
    return male[str]

}

console.log(generation("-2","F"))
    