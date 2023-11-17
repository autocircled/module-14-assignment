import axios from 'axios'
const BaseURL = "https://module-14-assignment-red.vercel.app/database";

export async function getJsonData(url) {
    const res = await axios.get(`${BaseURL}/${url}`)
    if (res.status === 200) {
        // console.log(res);
        return res
    } else {
        return [];
    }
}

