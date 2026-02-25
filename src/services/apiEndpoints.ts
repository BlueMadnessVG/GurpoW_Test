import axios from "axios";

export const apiGrupoW_quote = axios.create({
    baseURL:  import.meta.env.VITE_API_ENDPOINT_URL
})