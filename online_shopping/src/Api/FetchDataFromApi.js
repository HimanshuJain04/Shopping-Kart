
import axios from "axios";

const BaseUrl = "https://dummyjson.com";

async function FetchDataFromApi(url) {

    const FullUrl = `${BaseUrl}/${url}`;
    const response = await axios.get(FullUrl)
    return response;

}

export default FetchDataFromApi;
