import axios from "axios";

class PreferenceService {


    change(preference) {
        return axios({
            method: 'post', url: '/preference', data: preference,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }
    getPreference() {
        return axios({
            method: 'get', url: '/preference',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

}


export default new PreferenceService();
