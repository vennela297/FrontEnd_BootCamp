//1. Return the number of vowels in a string
//Create a function that'll return an integer of the number of vowels found in a string.


var vowels=function (name) {
    var str=""
    for(let i=0;i<name.length;i++)
    {
        if(name[i]=='a'||name[i]=='e'||name[i]=='i'||name[i]=='o'||name[i]=='u')
        {
            //return vowels[i]
            str=str+name[i];
        }
        
    }
    return str;
}


console.log(vowels("vennela"))