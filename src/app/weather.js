export class Weather {
    constructor(city, contryCode) {
        this.apikey = '7146154fb03b27d59f8ca23cfb3651b2'
        this.city = city;
        this.contryCode = contryCode;
    }


    getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.contryCode}&appid=${this.apikey}&units=metric`;
        const data = fetch(URI).then(response => response.json())
            .then(data => data)
        return data
    }

    changeLocation(city, contryCode) {
        this.contryCode = contryCode;
        this.city = city;


    }


}