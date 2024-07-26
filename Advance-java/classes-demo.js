// function Pen(name,color,price){

// }

// Pen.prototype.showprice = function(){
//     console.log("price of ", this.pen ,"having color" , this.color, " is ",this.price);
// }

// const pen1 = new Pen("Marker","Blue","$10");
// pen1.showprice()


class Pen{
    constructor(name,color,price){
        this.color=color;
        this.price=price;
        this.name=name;

    }

    showprice(){
        console.log("price of ", this.name ," having color " , this.color, " is ",this.price);
    }
}

const pen1 = new Pen("Marker","Blue","$10");
pen1.showprice()
