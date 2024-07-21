class Temperature {
    constructor() {
        this.celsius = 0;
        this.fahrenheit = 32;
    }

    getCelsius() {
        return this.celsius;
    }

    getFahrenheit() {
        return this.fahrenheit;
    }

    setCelsius(celsius) {
        if (typeof celsius === 'number') {
            this.celsius = celsius;
            this.fahrenheit = (celsius * 9/5) + 32;
        } else {
            console.log('Invalid input. Please enter a numeric value for Celsius.');
        }
    }

    setFahrenheit(fahrenheit) {
        if (typeof fahrenheit === 'number') {
            this.fahrenheit = fahrenheit;
            this.celsius = (fahrenheit - 32) * 5/9;
        } else {
            console.log('Invalid input. Please enter a numeric value for Fahrenheit.');
        }
    }
}

// Example usage
const temperature = new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius()}°C`); // Initial Celsius: 0°C
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit()}°F`); // Initial Fahrenheit: 32°F

temperature.setCelsius(25);
console.log(`Celsius: ${temperature.getCelsius()}°C`); // Celsius: 25°C
console.log(`Fahrenheit: ${temperature.getFahrenheit()}°F`); // Fahrenheit: 77°F

temperature.setFahrenheit(68);
console.log(`Celsius: ${temperature.getCelsius()}°C`); // Celsius: 20°C
console.log(`Fahrenheit: ${temperature.getFahrenheit()}°F`); // Fahrenheit: 68°F
