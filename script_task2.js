document.getElementById("convertButton").addEventListener("click", function () {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const kelvinInput = document.getElementById("kelvinInput");
    const resultText = document.getElementById("resultText");
    const conversionNote = document.getElementById("conversionNote");

    // Get input values
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const kelvinValue = parseFloat(kelvinInput.value);

    if (!isNaN(celsiusValue) && isNaN(fahrenheitValue) && isNaN(kelvinValue)) {
        // Convert Celsius to Fahrenheit and Kelvin
        const resultFahrenheit = (celsiusValue * 9/5) + 32;
        const resultKelvin = celsiusValue + 273.15;

        fahrenheitInput.value = resultFahrenheit.toFixed(2);
        kelvinInput.value = resultKelvin.toFixed(2);
        resultText.textContent = "";
        conversionNote.style.display = "none"; // Hide the note
    } else if (isNaN(celsiusValue) && !isNaN(fahrenheitValue) && isNaN(kelvinValue)) {
        // Convert Fahrenheit to Celsius and Kelvin
        const resultCelsius = ((fahrenheitValue - 32) * 5/9).toFixed(2);
        const resultKelvin = ((fahrenheitValue - 32) * 5/9) + 273.15;

        celsiusInput.value = resultCelsius;
        kelvinInput.value = resultKelvin.toFixed(2);
        resultText.textContent = "";
        conversionNote.style.display = "none"; // Hide the note
    } else if (isNaN(celsiusValue) && isNaN(fahrenheitValue) && !isNaN(kelvinValue)) {
        // Convert Kelvin to Celsius and Fahrenheit
        const resultCelsius = (kelvinValue - 273.15).toFixed(2);
        const resultFahrenheit = ((kelvinValue - 273.15) * 9/5) + 32;

        celsiusInput.value = resultCelsius;
        fahrenheitInput.value = resultFahrenheit.toFixed(2);
        resultText.textContent = "";
        conversionNote.style.display = "none"; // Hide the note
    } else {
        // Display an error message for invalid input
        resultText.textContent = "Please enter a valid temperature.";
        conversionNote.style.display = "block"; // Show the note
    }
});
