// const langs = ["Python", "Java", "C++"];

// langs.forEach(function(langs){
//     console.log(langs)
// })

// document.getElementById("btn").addEventListener("click", function(){
//     console.log("Tıkla");
// });

// function process1(){
//     setTimeout(function(){
//     console.log("Procces 1");
// },3000);
// }
// function process2(){
//     setTimeout(function(){
//     console.log("Process 2");
// },2000);
// }

// process1();
// process2();
// console.log("Naber");
/* Output: Naber \n Process 2 \n Process 1  ===> Asenkron bir işlem */

// function process1(callback){ // callback verilen bir isim. Her hangi bir isim verilebilirdi
//     setTimeout(function(){
//     console.log("Procces 1");
//     callback();
// },3000);
// }
// function process2(){
//     setTimeout(function(){
//     console.log("Process 2");
// },2000);
// }

// process1(process2);

/* Output: Process 1 \n Process 2  ===> Asenkron bir işlemi senkron işleme dönürştürme*/

const langs = ["Python", "Java", "C++"];

function addLang(lang, callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        })
    },1000);
}

addLang("JavaScript", getAllLangs);
