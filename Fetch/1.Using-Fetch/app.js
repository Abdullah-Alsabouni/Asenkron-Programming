function getTextFile(){

    fetch("example.txt") // fetch api window objenin içinde bulunan bir api ==> response objesi dödürür
    .then(response => response.text())  // response objesindeki text'i getir
    .then(data => console.log(data)) // Burası bir text dosyası
    .catch(err => console.log(err));

}

function getJsonFile(){ // Local bir Json dosyasından bir veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data)) // (3) [{...}, {...}, {...}]
    .catch(err => console.log(err));
}


function getExternalAPI(){
    fetch("https://v6.exchangerate-api.com/v6/72c6d8ae6e16d636355de0a8/latest/USD")
    .then(response => response.json())
    .then(function(data) {
        console.log(data.conversion_rates.TRY); // 29.5016            
    })
    .catch(err => console.log(err));

}


getExternalAPI();
//getJsonFile();
//getTextFile();
