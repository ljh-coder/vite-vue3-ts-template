import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";
import { UserForm } from "../types/index";

export default function () {
    // 表单实例
    const userFormRef = ref<FormInstance>();

    // 用户登录 & 注册表单
    const userForm = reactive<UserForm>({
        email: "",
        password: "",
    });

    // 自定义邮箱验证规则
    const checkEmail = (rule: any, value: any, callback: any) => {
        //验证邮箱
        const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (value && !regEmail.test(value)) {
            callback(new Error("*Please input a valid email address."));
        } else {
            // 验证通过
            callback();
        }
    };

    // 自定义密码验证规则
    const checkPassword = (rule: any, value: any, callback: any) => {
        // 正则表达式，密码长度为6-10，并且由数字和字母构成
        const regPassword = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,10}$/;

        if (value.length > 10) {
            callback(new Error("*Password must be 6-10 characters long."));
        } else if (value && !regPassword.test(value)) {
            callback(new Error("*Password must be 6-10 characters long and consist of letters and numbers."));
        } else {
            // 验证通过
            callback();
        }
    };

    return {
        userForm,
        userFormRef,
        checkEmail,
        checkPassword,
    };
}
