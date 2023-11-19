import axios from "axios"

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useaxios = () => {
    return axiosSecure
};

export default useaxios;