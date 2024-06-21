import {
    defineStore
} from 'pinia';
import axios from 'axios';

export const useWeather = defineStore({
    id: 'weather',
    state: () => ({
        weatherData: null,
        errorState: false,
    }),
    actions: {
        async getWeatherData(city = 'Tashkent') {
            try {
                const coords = await axios.get(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=b7725f4dd96cab673fa0579e1a065101`
                );

                const {
                    lat,
                    lon
                } = coords.data[0];

                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=49cc8c821cd2aff9af04c9f98c36eb74&units=metric&lang=ru`,
                );
                this.weatherData = response.data;
            } catch (error) {
                const coords = await axios.get(
                    `http://api.openweathermap.org/geo/1.0/direct?q=Tashkent&appid=b7725f4dd96cab673fa0579e1a065101`
                );
                const {
                    lat,
                    lon
                } = coords.data[0];
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=49cc8c821cd2aff9af04c9f98c36eb74&units=metric&lang=ru`,
                );
                this.weatherData = response.data;
            }
        }
    },
    getters: {

    },
});