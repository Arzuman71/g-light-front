import axios from "axios";

class ItemService {

    getItemById(id) {
        return axios({
            method: 'get', url: '/item/' + id
        })
    }
}


export default new ItemService();
