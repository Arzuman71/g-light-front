import axios from "axios";

class UserService {


    getUser() {
        return axios({
            method: 'get', url: '/user',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    forgotPass(email) {
        return axios.get('/user/forgotPassword/' + email)
    }


    forgotPasswordChange(forgotPasswordDto) {
        return axios.put('/user/forgotPassword/change', forgotPasswordDto);
    }

    forgotPasswordReset(email, otp) {
        return axios.get('/forgotPassword/reset?email=' + email + '&otp=' + otp)
            .then(res => {
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('otp', res.data.otp)
            })
            .catch(err => {
                console.log()
            })
    }

    register(userRegister) {
        return axios.post('/user', userRegister);
    }


    login(user) {
        return axios.post('/user/auth', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('type', res.data.type)
            })
            .catch(err => {
                console.log()
            })
    }


    delete() {
        return axios({
            method: 'delete', url: '/user',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    dataChange(userChangeDto) {
        return axios({
            method: 'put', url: '/user', data: userChangeDto,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }

    passwordChange(passwordChangeDto) {
        return axios({
            method: 'put', url: '/user/password/change', data: passwordChangeDto,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }


}


export default new UserService();
