import {APIKey} from "../constants";

export const location = `https://api.unsplash.com/`

export const getImages = async (page = 1) =>
    await fetch(location + `photos?page=${page}&client_id=${APIKey}`)
        .then(res => res.json())
