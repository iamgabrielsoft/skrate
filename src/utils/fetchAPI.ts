
import axios from "axios";


export const baseUrl = 'https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818';



export const fetchApi = async (url:string) => {
    const { data }  = await axios.get((url), {
        headers: {
            'Content-type': 'application/json'
        }
    })

    return data; 
}