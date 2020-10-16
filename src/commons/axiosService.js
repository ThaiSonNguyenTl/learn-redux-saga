import axios from 'axios';

class AxiosService {
    constructor() {
        const INSTANCE = axios.create()
        INSTANCE.interceptors.response.use(this.handleSuccess,this.handleError)
        this.instance = INSTANCE // tao bien instance cho class
    }

    handleSuccess(response) {
        return response
    }
    handleError(error) {
        return Promise.reject(error)
    }

    getRequest(url) {
        return this.instance.get(url)
    }
    postRequest(url,body){
        return this.instance.post(url,body)
    }
    putRequest(url,body){
        return this.instance.put(url,body)
    }
    deleteRequest(url){
        return this.instance.delete(url)
    }
}
export default new AxiosService()