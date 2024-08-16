import httpRequest from "@/utils/request";
import { LoginResult } from "@/types/user";

// 登录验证
export const userLoginAPI = (email: string, password: string) => {
    return httpRequest<LoginResult>({
        method: 'POST',
        url: '/users/login',
        data: {
            email,
            password
        }
    })
}

// 注册
export const userRegisterAPI = (email: string, password: string) => {
    return httpRequest({
        method: 'POST',
        url: '/users/register',
        data: {
            email,
            password
        }
    })
}