import axios from 'axios';
import { Message } from 'element-ui';

const Tip = (msg, type="warning") => {
    Message({
        showClose: true,
        message: msg,
        type: type
    })
}

axios.defaults.withCredentials = true;

let serve = axios.create({
    timeout: 1000 * 12,
    baseURL: process.env.VUE_APP_API_URL || '/web',
    // baseURL: 'http://localhost:3000/web'
})

serve.defaults.headers.post["Content-Type"] = "appliction/json; charset=UTF-8";

// 请求拦截，进行token验证
serve.interceptors.request.use(
    config => {

        // token验证

        return config;
    },
    error => Promise.error(error)
);

const errorHandle = (status) => {
    switch (status) {
        case 401:
            Tip("账号或密码错误", 'error');
            break;
        case 403:
            Tip("登录过期，请重新登录");
            //清除session、token
            localStorage.removeItem('token')
            //跳回登录页
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000)
            break;
        case 404:
            Tip("请求的资源不存在");
            break;
    }
}

// 响应拦截器
serve.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),

    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            //请求已经发，但不在2xx的范围内
            errorHandle(response.status);
            return Promise.reject(response);
        }
    }
);

export default serve;