class Holiday {
    constructor(name,day,month)
    {
        this.name=name
        this.month=month
        this.day=day
    }
    isSameMonth(obj1,obj2) {
        return (obj1.month==obj2.month)
        
    }
}

let obj1=new Holiday("holi",26,"march")
let obj2=new Holiday("birthday",26,"march")

console.log(obj1.isSameMonth(obj1,obj2))