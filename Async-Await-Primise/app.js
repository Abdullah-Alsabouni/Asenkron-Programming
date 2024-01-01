// async function test(data){ // Fonsiyonun başına async ==> Bu Fonksiyon "Promise return new Promise" döndüreceği anlamına gelir
//   //2.  // return new Promise((resolve, reject) => { // async'in oluşturduğu yapı
//     //     resolve(data);
//     // });
//   //1.  //return data;
//   // 1.Yapı
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir");
//         },3000);
//     });
//     // await sadece async fonksiyonlarda çalışır!!
//     let response = await promise;  // await: Promise objesinden olumlu sonucu yakalar
//     //console.log(response); // 3 saniye sonra response yakalnacak ==> Bu bir değerdir.

//     return response;

// }

// //console.log(test("Hello")); // >Promise {<fulfilled>: 'Hello'} // 
// //test("Hello"); // return response yoksa
// test("Hello").then(response => console.log(response)); // Promise objesi yakalama ====> Bu bir değerdir

// async function testData(data){
//     let promise = new Promise((resolve ,reject) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         },3000);
//     });

//     const response = await promise;

//     return response;
// }

// testData("thriller")
// .then(data => console.log(data)) // triller
// .catch(err => console.log(err)); // Hata durumunda ==> Error: Lütfen string bir değer girin

// Async ve fetch

async function getCurrency(url){

    const response = await fetch(url); // Response Object

    const data = await response.json(); // Json object

    return data;

}

getCurrency("https://v6.exchangerate-api.com/v6/f22282b01132835d37f9848a/latest/USD")
.then(response => console.log(response))
.catch(err => console.log(err));
 
