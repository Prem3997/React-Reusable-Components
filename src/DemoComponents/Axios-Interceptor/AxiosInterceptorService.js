import Axios from 'axios'
class AxiosInterceptorService{
    get404(){
        return Axios.get(`http://httpstat.us/404`)
    }
    get500(){
        return Axios.get(`http://httpstat.us/500`)
    }
    get400(){
        return Axios.get(`http://httpstat.us/400`)
    }
    
}
export default new AxiosInterceptorService();