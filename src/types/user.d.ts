
// 登录成功后返回的结果
export type LoginResult = {
    // 用户ID
    id: number
    // 用户名称
    email: string
    // 登录凭证
    token: string
}