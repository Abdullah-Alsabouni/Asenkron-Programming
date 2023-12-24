const person = {
    age: 25,

    // tellAge: function(){

    //     // this - Person
    //     console.log(this); // {age: 25, tellAge f} ==> bind yoksa  // Window {....} ==> bind varsa
    //     console.log(this.age); // 25  ==>  bind yoksa   // undefined ==> bind varsa
    // }.bind(this)  // bind: window objesindeki özelliği çağırır

    tellAge: () => { // bind özelliği olan bir fonksiyon gibi çalışır
        console.log(this); // Window {....}
        console.log(this.age);  // undefined
    }



    //this - Window 
}

person.tellAge(); // 25
