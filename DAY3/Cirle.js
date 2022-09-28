class circle 
{
    constructor(radius)
    {
        this.radius=radius
    }
    getArea(){
        return 3.14*this.radius*this.radius
    }
    getPerimeter(){
        return 2*3.14*this.radius
    }
}
let myCircle=new circle(2);
console.log(getArea())
console.log(getPerimeter())