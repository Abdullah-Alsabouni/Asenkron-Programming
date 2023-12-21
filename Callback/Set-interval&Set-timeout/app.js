// Set interval & Set timeout window objesinde tanımlanan bir metotlar

// Set timeout

// setTimeout(function(){ 

//     console.log("Hello World");

// },2000); // Fonksiyo çağırımı yapıldıktan 2 saniye sonra fonksiyon çalışır

// let i = 0;

// let value = setInterval(function(){
//     i++;
//     console.log("Sayı: ",i);

// },1000) // 1 saniye aralıklarla fonksiyonu sonsuza kadar çalıştırır

// document.getElementById("btn").addEventListener("click", function(){
//     clearInterval(value);
// })

// Clear interval : setInterval'i durdur. Window objesinde tanımlı değil



// setInterval ile bir fonksiyonu her 1000 milisaniyede bir çağıralım
var intervalId = setInterval(function() {
    console.log("Bu mesaj her saniyede bir yazdırılacak.");
}, 1000);

// Belirli bir süre sonra setInterval'ı iptal etmek için clearInterval kullanılır.
setTimeout(function() {
    clearInterval(intervalId);
    console.log("setInterval durduruldu.");
}, 5000); // 5 saniye sonra clearInterval çağrılır.

