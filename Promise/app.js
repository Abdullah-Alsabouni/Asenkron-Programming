// // function getData(data){ // Promise objesi döndüren fonksiyon

// //     return new Promise(function(resolve, reject){ // function(resolve, reject) ==> calback fomksiyonu ==> resolve = olumlu response, reject = olumsuz response
// //         setTimeout(function(){
// //             resolve("Olumlu sonuç"); // reject("Olumsuz sonuç");
// //         },10000);
// //     });

// // }

// // // console.log(getData("Merhaba"));// 10 saniyeden önce [[PromiseState]]: "pending", [[PromiseResult]]: undefined // 10 saniye sonra ==>   >[[Prototype]] : Promise, [[PromiseState]]: "fulfilled", [[PromiseResult]]: "Olumlu sonuç"


// // // getData("Hello").catch(function(err){
// // //     console.log(err); // 10 saniye sonra ==> Oumsuz sonuç
// // // });

// // getData("Hello").then(function(response){
// //     console.log(response); // 10 saniye sonra ==> Olumlu sonuç
// // });

// function getData(data) {

//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof data === "string") {
//                 // olumlu
//                 resolve(data);
//             }
//             else {
//                 //Olumsuz
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         }, 2000);
//     });

// }



// // getData("Merhaba").then(function(response){
// //     console.log("Gelen değer " + response); // getData("Merhaba") ==> 2 saniye sonra ==> Merhaba
// // }).catch(function(err){
// //     console.log(err);// console.error(err); ==> Hata mesajı kırmızı ile görüntülenir  // getData(x) x string değilse ===>Error: Lütfen string bir değer girin
// // });
// getData(36)
// .then(response => console.log("Gelen Değer " + response))
// .catch(err => console.error(err));

function addTwo(number){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (typeof number === "number"){
                resolve(number + 2);
            }
            else {
                reject(new Error("Lütfen bir sayı girin"));
            }
        },3000);
    });
}

/* PROMİSE CHAİN */

addTwo(10)
.then(response => {
    console.log(response); // 10  + 2  = 12
    return response + 2;  // 14 ==> promise objesi olarak döner
}).then(response2 => {
    console.log(response2); // 14
})
.catch(err => console.log(err));
// Promise zincirinde sadece bir tane catch kullanılabilir ve birden fazla the kullanılabilir 
