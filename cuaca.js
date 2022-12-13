fetch("https://api.openweathermap.org/data/2.5/weather?q=Bandung&appid=27da886a1c1e8b8d09b3270da3af40a7")
        .then(x => x.json())
        .then(y => document.getElementById("cuaca").innerHTML = (Number(y.main.temp)-273).toFixed(2));
