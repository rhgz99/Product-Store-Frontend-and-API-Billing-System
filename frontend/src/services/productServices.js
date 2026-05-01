import axios from "axios";

const api_url = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

export const getProducts = async () => {
    try {
        const response = await api_url.get('/products')
        
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || 'Error fetching products'
        }
    }
}