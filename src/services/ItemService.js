import axios from "axios";

class ItemService {

    getItemById(id) {
        return axios({
            method: 'get', url: '/item/' + id
        })
    }

    save(item) {
        return axios({
            method: 'post', url: '/item', data: item,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    myItemById(id) {
        return axios({
            method: 'get', url: '/item/my/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    getMyItemsActive() {
        return axios({
            method: 'get', url: '/item/active',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    getMyItemsArchived() {
        return axios({
            method: 'get', url: '/item/archived',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    change(itemReqDto) {
        return axios({
            method: 'put', url: '/item/change', data: itemReqDto,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    delete(id) {
        return axios({
            method: 'delete', url: '/item/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    changeStatus(id) {
        return axios({
            method: 'put', url: '/item/change/status/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

}


export default new ItemService();
