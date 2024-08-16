<template>
    <el-form class="form" :model="userForm" :rules="loginRules" ref="userFormRef">
        <p class="title">Login</p>
        <div class="input-group">
            <label for="email">Email</label>
            <el-form-item prop="email">
                <el-input type="text" v-model="userForm.email" placeholder="Enter your email" />
            </el-form-item>
        </div>
        <div class="input-group">
            <label for="password">Password</label>
            <el-form-item prop="password">
                <el-input type="password" v-model="userForm.password" show-password placeholder="Enter your password" />
            </el-form-item>
        </div>
        <el-button class="sign" @click="login(userFormRef)">Sign in</el-button>
        <p class="signup">
            Don't have an account?
            <router-link to="/register">Sign up</router-link>
        </p>
    </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { ElNotification } from "element-plus";
import { userLoginAPI } from "@/api/user";
import { useRouter } from "vue-router";
import type { FormInstance, FormRules } from "element-plus";

// 导入公共方法
import useUserForm from "./common/hooks/useUserForm";
import { UserForm } from "./common/types/index";
const { checkEmail, checkPassword, userForm, userFormRef } = useUserForm();

import { useUserStore } from "@/stores/user";
const userStore = useUserStore();

// 表单验证规则
const loginRules = reactive<FormRules<UserForm>>({
    email: [
        { required: true, message: "*Please input email.", trigger: "change" },
        { validator: checkEmail, trigger: "blur" },
    ],
    password: [
        { required: true, message: "*Please input password.", trigger: "change" },
        { validator: checkPassword, trigger: "blur" },
    ],
});

// 登录
const router = useRouter();
const login = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            // 登录验证
            const res = await userLoginAPI(userForm.email, userForm.password);
            console.log(res);
            if (res.success) {
                // 保存用户信息
                userStore.setUserInfo(res.data);
                console.log(res.data);
                ElNotification({ title: "success", message: "Login successful.", type: "success" });
                setTimeout(() => {
                    // 登录成功后跳转至首页
                    router.push("/home");
                }, 1e3);
            }else {
                ElNotification({ title: "Error", message: "Login failed.", type: "error" });
            }
        }
    });
};
</script>

<style lang="less" scoped>
@import url("./common/style/index.less");
</style>
