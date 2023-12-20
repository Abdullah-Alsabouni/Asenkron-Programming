document.getElementById("change").addEventListener("click", change);


function change(){

    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://v6.exchangerate-api.com/v6/eccf99329c33b527d6b3f422/latest/USD"); // "https://v6.exchangerate-api.com/v6/eccf99329c33b527d6b3f422/latest/USD" ==> Endpoint

    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.responseText);
            //console.log(response); // https://api.exchangeratesapi.io/latest adresinin JSON dosyası obje şeklinde
            //console.log(this.responseText); // ==> https://api.exchangeratesapi.io/latest adresinin JSON dosyası
            console.log(response.conversion_rates.TRY); // response objesinde rates objesinde TRY bulunur ==> 29.0589

            const rate = response.conversion_rates.TRY;
            //const amount = document.getElementById("amount").value;
            //console.log(typeof document.getElementById("amount").value); // string
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;
            console.log(amount * rate); // girdi => amount = 20 =====> çıktı ==> 20 * 29.0589 = 581.178
            

        }
    }

    xhr.send();

}
