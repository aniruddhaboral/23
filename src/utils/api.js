import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"; 

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "f25138a589msh43dc74b9b28d8a1p1ec3fejsn6849844e899d",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com", 
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
