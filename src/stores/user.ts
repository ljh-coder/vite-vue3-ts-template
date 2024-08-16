import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginResult } from "@/types/user";

export const useUserStore = defineStore("user", () => {

    // 定义用户信息
    const userInfo = ref<LoginResult>();
    // 保存用户信息
    const setUserInfo = (val: LoginResult) => {
        userInfo.value = val
    }
    // 清空用户信息
    const clearUserInfo = () => {
        userInfo.value = undefined
    }

    return {
        userInfo,
        setUserInfo,
        clearUserInfo
    }
},{
    // 数据持久化
    persist: {
        // 默认存储至 localStorage
        storage: localStorage,
        // 指定需要被持久化的数据
        paths: ["userInfo"],
    }
});
