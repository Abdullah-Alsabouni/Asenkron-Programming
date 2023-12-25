// Ajax, callback , http requests

// GET

/* Temp ile çözüm */

// class Requests{
//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }
//     // Get request
//     get(url){


//         this.xhr.open("GET", url);
//         const temp = this;
//         this.xhr.onload = function(){

//             // console.log(this); // XMLHttpRequest {...}
//             if (temp.xhr.status === 200){
//                 console.log(temp.xhr.responseText);
//             }
//         }

//         this.xhr.send();
//     }
// }

// const request = new Requests();

// request.get("https://jsonplaceholder.typicode.com/albums"); // Hata verir ==> temo kullanılmazsa  // console.log(this.xhr) // Hatayı önlemek için "temp" ile çözüm yapılabilir, Fakat tercih edilen bir değil ==> JSON object


/* xhr'ı kaldırarak ile çözüm */

// class Requests{
//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }
//     // Get request
//     get(url){


//         this.xhr.open("GET", url);
//         this.xhr.onload = function(){

//             // console.log(this); // XMLHttpRequest {...}
//             if (this.status === 200){ // this xhr'ı gösterir
//                 console.log(this.responseText);
//             }
//         }

//         this.xhr.send();
//     }
// }

// const request = new Requests();

// request.get("https://jsonplaceholder.typicode.com/albums"); // JSON object

/* Bind ile çözüm */

// class Requests{
//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }
//     // Get request
//     get(url){


//         this.xhr.open("GET", url);

//         this.xhr.onload = function(){ // Son yöntem bind yerine arrow fonksiyonu şeklinde yazmak ==> this.xhr.onload = () =>{...}


//             if (this.xhr.status === 200){
//                 console.log(this.xhr.responseText);
//             }
//         }.bind(this);

//         this.xhr.send();
//     }
// }

// const request = new Requests();

// request.get("https://jsonplaceholder.typicode.com/albums");


// class Requests{
//     constructor(){
//         this.xhr = new XMLHttpRequest();
//     }
//     // Get request
//     get(url, callback){


//         this.xhr.open("GET", url);

//         this.xhr.onload = () =>{ 


//             if (this.xhr.status === 200){
//                 callback(null, this.xhr.responseText);
//             }

//             else{
//                 callback(" Get Request: Herhangi bir hata oluştu", null);
//             }
//         }

//         this.xhr.send();
//     }
// }

// const request = new Requests();

// albums = request.get("https://jsonplaceholder.typicode.com/albums", function(err, response){ // function(err, response) = callback(error, withoutError) // Get fonksiyonundan gelir

//     //console.log(response); // JSON Dosyası içeriği
//     if(err === null){
//         // withoutError
//         console.log(response);
//     }
//     else {
//         // Error
//         console.log(err);
//     }

// });

//const albums = request.get("https://jsonplaceholder.typicode.com/albums");
// console.log(albums); / callback kullanmadan ==> undefined


// albums = request.get("https://jsonplaceholder.typicode.com/albums/51", function(err, response){ // id 51 olan objeyi getir

//     if(err === null){
//         // withoutError
//         console.log(response);
//     }
//     else {
//         // Error
//         console.log(err);
//     }

// });


// POST


class Requests {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    // Get request
    get(url, callback) {


        this.xhr.open("GET", url);

        this.xhr.onload = () => {


            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }

            else {
                callback("Herhangi bir hata oluştu", null);
            }
        }

        this.xhr.send();
    }
    post(url, data, callback){
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // "application/json" ==> JSON verisi

        this.xhr.onload = () => {
            if(this.xhr.status === 201){ // 201 => dosya yaratma işlemi
                // Başarılı
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Post Request : Her hangi bir hata oluştu", null);
            }
        }
        
        this.xhr.send(JSON.stringify(data));


    }
}

const request = new Requests();

request.post("https://jsonplaceholder.typicode.com/albums", {userId: 2, title: "Thriller"}, function(err, album){

    if(err === null){
        // Without Error
        console.log(album); // {userId": 2, "title": "Thriller", "id": 101}
    }
    else{
        // Error
        console.log(err);
    }
})


