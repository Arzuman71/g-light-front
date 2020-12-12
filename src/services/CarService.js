import axios from "axios";


class CarService {


    getOne(id) {
        return axios({
            method: 'get', url: '/car/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    cars() {
        return axios({
            method: 'get', url: '/car/cars',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    save(car) {
        return axios({
            method: 'post', url: '/car', data: car,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    deleteCar(id) {
        return axios({
            method: 'delete', url: '/car/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    changeCarData(car) {
        return axios({
            method: 'put', url: '/car', data: car,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }
}


export default new CarService();
