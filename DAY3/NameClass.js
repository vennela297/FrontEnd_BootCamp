//let myFunction = (a, b) => a * b;

class Name 
{
    constructor(firstName,LastName)
    {
        this.firstName=firstName
        this.LastName=LastName

    }
    
    getFullName(){
        return this.firstName+this.LastName
    }
    getInitial(){
        var fname=this.firstName
        var lname=this.LastName
        return fname.substring(0,1)+"."+lname.substring(0,1)
    }

    
    

}

let myName=new Name("Vennela","Venkatesh");
console.log(myName.getFullName());
console.log(myName.getInitial());