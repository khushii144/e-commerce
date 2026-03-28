const baseUrl= import.meta.env.VITE_BACKEND_URL


const api={
    user:{
        register: baseUrl + "/user/register",
        login: baseUrl + "/user/login"
    }
}
export default api



