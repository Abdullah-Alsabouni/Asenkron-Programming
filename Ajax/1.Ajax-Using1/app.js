// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error
// Holds the status of the XMLHttpRequest
// 0 : request not initialized
// 1 : server connection established
// 2 : request received
// 3 : processing request
// 4 : request finished and response is ready

document.getElementById("btn").addEventListener("click", function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();


    // xhr.onprogress = function(){ // ==> Process işleniyor... 3      // onprogress(3 : processing request)
    //     console.log("Process işleniyor...", this.readyState);
    // }

    xhr.onload = function(){ // onload : response hazır olduğunda ==> 4'e geldiğinde
        if (this.status == 200){
            //console.log(this.responseText); // Bu bi text dosyasıdır(4 : request finished and response is ready)
            document.getElementById("ajax").textContent = this.responseText; // HTML dosyasına response'un içeriğini(Bu bir text dosyasıdır) ekle
        }
    }
//    xhr.onreadystatechange = function(){

//     //console.log(this.readyState); // 1 \n 2 \n 3 \n  4   ==> Üstteki rakamlı işlemler gerçekleşti
//     //console.log(this.status); // 0 \n 200 
//     // response = example.exe
//     if (this.status == 200 && this.readyState == 4) { // Bu şartlar sağlanırsa ==> response hazır
//         console.log(this.responseText); // Bu bir text dosyasıdır
//     }


//    }
   xhr.open("GET", "example.txt", true); // request türü => "GET", istenen request dosyası => "example.txt" , asenkron? => true

   xhr.send(); 

});
