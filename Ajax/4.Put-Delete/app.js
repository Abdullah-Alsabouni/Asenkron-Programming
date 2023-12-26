class Requests {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    // Get request
    delete(url, callback) {


        this.xhr.open("DELETE", url);

        this.xhr.onload = () => {


            if (this.xhr.status === 200) {
                callback(null, "Veri silme işlemi başarılı");
            }

            else {
                callback("Herhangi bir hata oluştu", null);
            }
        }

        this.xhr.send();
    }
    put(url, data, callback){
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // "application/json" ==> JSON verisi

        this.xhr.onload = () => {
            if(this.xhr.status === 200){ 
                // Başarılı
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Put Request : Her hangi bir hata oluştu", null);
            }
        }
        
        this.xhr.send(JSON.stringify(data));


    }
    
}

// const request = new Requests();

// request.put("https://jsonplaceholder.typicode.com/albums/10", {userId: 10, title: "Abdullah"}, function(err, album){ // Put işlemi Json dosyasında günelleme yapar

//     if(err === null){
//         // Without Error
//         console.log(album); // { "userId: 10, "title": "Abdullah", "id": 10}
//     }
//     else{
//         // Error
//         console.log(err);
//     }
// })


 const request = new Requests();
 request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err, response){ 

     if(err === null){
         // withoutError
         console.log(response); // Veri silme işlemi başarılı
     }
     else {
        // Error
         console.log(err);
     }

 });
