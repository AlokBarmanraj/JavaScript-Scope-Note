//--------JavaScript Scope--------//



let car = "Toyota";    //গ্লোবাল স্কোপ  //
console.log(car);

if (true) {
    console.log(car);
    let bike = "SF";        //লোকাল স্কোপ //
    console.log(bike); 
    if (true){
        let fish = "Blue While";
        console.log(fish);
    }          
}                              // এখানে {} মধ্যে console.log করলে কাজ করছে কিন্তু  {} বাইরে console.log  করলে আর কাজ করছে না ।  এই কারণে {} ভেতরের কোড গুলোকে বলা লোকাল স্কোপ আর {} বাইরের কোড গুলোকে বলা গ্লোবাল স্কোপ । //
// console.log(bike);     //  গ্লোবাল স্কোপ {} বাইরে console.log  করলে আর কাজ করছে না //


function FullName() {
    let cycle = "Hero";
    console.log(cycle);
    function LastName () {
        let fruit = "Apple";
        console.log(fruit);
    }
    LastName();
}
FullName();

// Automaticaly Global Variable //
person = 'Alok Barman';      // এটা সব জায়গা তে কাজ করবে কারণ এটাকে কোন let, var, Const দিয়ে নির্দেশ করা হয়নি । এটা নেয়া উচিত হবে না ।
console.log(person);


let number = 100;          //গ্লোবাল স্কোপ নেয়া উচিত না //
console.log(number);
function FulNumber(){       //সব কিছু ব্লোক স্কোপ এর মধ্যে নিতে হবে //
    let number = 150;
    console.log(number);
}
FulNumber();
console.log(number);





