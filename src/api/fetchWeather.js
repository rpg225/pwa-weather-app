import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '34a96739375a905a31a386c4cf6f51ab';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL,  {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;

}