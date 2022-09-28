//Consider your mobile phone and represent it as an object. Create a method to display only the tech spec of it. Create a method that computes the remaining storage available
var mobile= {
    ram:4,
    rom:4,
    totalStorage: 100,
    remainingStorage:0,
    display: function() {
        console.log(`RAM IS ${this.ram}, ROM IS ${this.rom}`)

    },
    calc : function (used) {
        this.remainingStorage=this.totalStorage-used;
        return this.remainingStorage


    }
}

console.log(mobile)
console(mobile.calc(50))
console.log(mobile.display)