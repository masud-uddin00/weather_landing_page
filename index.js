const weatherData = [
        { district: "Dhaka", temperature: 32, condition: "Sunny", icon: "bi-sun-fill" },
        { district: "Sylhet", temperature: 27, condition: "Rainy", icon: "bi-cloud-rain-fill" },
        { district: "Khulna", temperature: 30, condition: "Cloudy", icon: "bi-cloud-fill" }
    ];

    const select = document.getElementById("city-select");
    const output = document.getElementById("weather-output");
    const visual = document.getElementById("visual-area");
    const warning = document.getElementById("warning-message");

    select.onchange = function () {

        if (select.value === "") {
            warning.style.display = "block";
            output.innerHTML = "";
            visual.innerHTML = "";
            return;
        }

        warning.style.display = "none";

        const data = weatherData.find(x => x.district === select.value);

        output.innerHTML = `${data.temperature}°C - ${data.condition}`;
        visual.innerHTML = `<i class="bi ${data.icon}" style="font-size: 80px;"></i>`;
    };