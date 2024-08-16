import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig } from "axios";
import { useUserStore } from "@/stores/user";
import { ElNotification } from "element-plus";

// import { useRouter } from "vue-router"
// 由于 useRouter 必须写在 setup 中，所有无法在此使用
import Vrouter from "@/router"
// const route = Vrouter.currentRoute.value
const router = Vrouter


const http = axios.create({
    // 根据全局的环境变量来设置请求 api 的 baseURL，例如在 development (开发环境)，import.meta.env.VITE_APP_BASE_API 的值 => '/api'
    // 注意：如果 VITE_APP_BASE_API 的值是一个相对地址，如：'/api'，则请求会经过 server.proxy 代理拼接完整路径。
    //      如果 VITE_APP_BASE_API 的值是完整的地址，如：http://xx.xx.xx.xx/，则会直接发送请求而不经过 server.proxy 代理
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 请求超时时间
    timeout: 5000,
});

// 请求拦截
http.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 获取用户信息中的 token 信息
        const userStore = useUserStore();
        const token = userStore.userInfo?.token;
        if (token) {
            // 添加 token 请求头标识（注意 Bearer 后面还有一个空格！！！）
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        console.log(error);
        ElNotification({
            title: "Error",
            message: error.message,
            type: "error",
        });
        return Promise.reject(error);
    }
);

// 响应拦截
http.interceptors.response.use(
    (response: AxiosResponse) => {
        // 请求成功
        // 处理成功响应
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            ElNotification({
                title: "Error",
                message: "Request error.",
                type: "error",
            });
            return Promise.reject(new Error("*Request error."));
        }
    },
    (error) => {
        // 请求失败
        console.log(error);
        // 状态提示
        let msg = "";
        let status = error.response.status;
        console.log(status);

        switch (status) {
            // token 过期处理
            case 401:
                msg = "Login expired, please log in again.";
                // 清理用户数据，跳转至登录页面
                const userStore = useUserStore();
                userStore.clearUserInfo();
                // 跳转至登录页面
                router.push("/login");
                break;
            case 404:
                msg = "The network request does not exist.";
                break;
            case 500:
                msg = "Server error.";
                break;
            default:
                msg = error.response.data.message;
                break;
        }
        ElNotification({
            title: "Error",
            message: msg,
            type: "error",
        });
        return Promise.reject(error);
    }
);

// 后端数据响应格式
type ResponseResult<T> = {
    success: boolean;
    code: number;
    msg: string;
    data: T;
};

// 封装 http 请求函数
const httpRequest = async <T>(config: AxiosRequestConfig): Promise<ResponseResult<T>> => {
    const response: AxiosResponse<ResponseResult<T>> = await http.request(config);
    // 返回整个 ResponseResult 对象
    return response.data;
};

export default httpRequest;
