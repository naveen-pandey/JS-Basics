// Object Oriented Programming


let baseSal=30000;
let overtime=10;
let rate=20;

function getWage(baseSal,overtime,rate) {
    return baseSal+(overtime*rate);
}

// Encapsultation
let employee={
    baseSal:30000,
    overtime:10,
    rate:20,
    getWage: function() {
        return this.baseSal+(this.overtime * this.rate);
    }
};

employee.getWage();
 

// Abstraction 


