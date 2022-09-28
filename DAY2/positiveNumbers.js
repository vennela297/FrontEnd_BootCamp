//2. Create a function that receives an array of numbers and returns an array containing only the positive numbers

var arr=[1,-2,3,3,-1]
var positive=function(arr1) {
    var arr2=[]
    let j=0
    for(let i=0;i<arr1.length;i++)
    {
        if(arr[i]>=0)
        {
            arr2[j]=arr[i]
            j++;
        }
    }
    return arr2;
    
}


console.log(positive(arr))