import axios from "axios"
import { SearchType } from "../types"

export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {

        const appId = 'f082993aba3617fcb6a9c7b0165ab5e2'
        try {
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

            const { data } = await axios(geoUrl)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchWeather
    }
}