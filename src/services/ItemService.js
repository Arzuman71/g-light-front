import axios from "axios";

class ItemService {

    getItemById(id) {
        return axios({
            method: 'get', url: '/item/' + id
        })
    }

    itemsActive() {
        return axios({
            method: 'get', url: '/item/active',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    itemsArchived() {
        return axios({
            method: 'get', url: '/item/archived',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
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

    delete(id) {
        return axios({
            method: 'delete', url: '/item/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    changeArchived(id) {
        return axios({
            method: 'put', url: '/item/change/archived/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    changeActive(id) {
        return axios({
            method: 'put', url: '/item/change/active/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    change(itemDto) {
        return axios({
            method: 'put', url: '/item/change', data: itemDto,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }
}


export default new ItemService();
