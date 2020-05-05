import axios from 'axios';

export const API = `https://api.kawalcorona.com/`

// export const get = async (url) => axios.get(API/url)
 
export const GET_DATA_DUNIA = API 
export const GET_DATA_INDONESIA = API + `indonesia/`
export const GET_DATA_PROVINSI = API + `indonesia/provinsi/`