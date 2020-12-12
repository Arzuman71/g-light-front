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

    register(userRegister) {
        return axios.post('/user', userRegister);
    }
    forgotPasswordChange(forgotPasswordDto) {
        return axios.put('/user/forgotPassword/change', forgotPasswordDto);
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

    forgotPasswordReset(email, otp) {
        return axios.get('/user/forgotPassword/reset?email=' + email + '&otp=' + otp)
            .then(res => {
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('otp', res.data.otp)
            })
            .catch(err => {
                console.log()
            })
    }


}


export default new UserService();
