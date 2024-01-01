class Request {
    get(url){  // Get Request
        return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        })
        
    }
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then(data => resolve(data)) // {userId: 7, title: "Triller", id: 101} // yeni obje eklendi
                .catch(err => reject(err));
        })
        
    }
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                }
              })
                .then((response) => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
        
    }
     delete(url){
        return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/albums/1", {
        method: "DELETE"
        }).then(response => resolve("Veri silme işlemi başarılı"))
        .catch(err => reject(err));
     });
    }
}

const request = new Request();

// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId: 10, title: "The best ever"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message)) // Veri silme işlemi başarılı
.catch(err => console.log(err));
