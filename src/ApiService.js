import axios from 'axios'
import TokenService from './TokenService'

class ApiService {

      static setConfig () {
            let token = TokenService.getToken();
            axios.defaults.baseURL = 'http://localhost:8000/api/';
            this.config =  {
                  headers : {
                    'Authorization' : `Bearer ${token}`
                  }
                }
      }

      static get(url) {
            this.setConfig()
            return axios.get(url , this.config)
      }
      static post (url , data) {
            this.setConfig()
            return axios.post(url , data , this.config)
      }
      static patch(url , data) {
            this.setConfig();
            return axios.patch(url , data , this.config)
      }
      static patch(url , data) {
            this.setConfig();
            return axios.put(url , data , this.config)
      }
      static delete(url) {
            this.setConfig();
            return axios.delete(url , this.config)
      }
}

export default ApiService