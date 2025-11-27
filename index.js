let weatherData = [
    { district: "Dhaka", temperature: 32, condition: "Sunny", icon: "bi-sun-fill" },
    { district: "Sylhet", temperature: 27, condition: "Rainy", icon: "bi-cloud-rain-fill" },
    { district: "Khulna", temperature: 30, condition: "Cloudy", icon: "bi-cloud-fill" }
];

let select = document.getElementById("city-select");
let output = document.getElementById("weather-output");
let visual = document.getElementById("visual-area");
let warning = document.getElementById("warning-message");

select.onchange = function () {

    if (select.value === "") {
        warning.style.display = "block";
        output.innerHTML = "";
        visual.innerHTML = "";
        return;
    }

    warning.style.display = "none";

    // find data manually
    let data = null;
    for (let i = 0; i < weatherData.length; i++) {
        if (weatherData[i].district === select.value) {
            data = weatherData[i];
            break;
        }
    }

    output.innerHTML = data.temperature + "°C - " + data.condition;
    visual.innerHTML = "<i class='bi " + data.icon + "' style='font-size: 80px;'></i>";
};
