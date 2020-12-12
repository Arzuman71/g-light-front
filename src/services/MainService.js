import axios from "axios";

class MainService {

    searchItem(searchItems) {
        return axios({
            method: 'post', url: '', data: searchItems,
        })
    }

    logout() {
        return axios({
            method: 'get', url: 'http://localhost:8080/logout',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }
}


export default new MainService();
