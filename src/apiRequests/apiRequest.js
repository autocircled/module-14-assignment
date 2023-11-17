import axios from 'axios'
const BaseURL = "http://localhost:5173/database";

export async function getJsonData(url) {
    const res = await axios.get(`${BaseURL}/${url}`)
    if (res.status === 200) {
        // console.log(res);
        return res
    } else {
        return [];
    }
}

