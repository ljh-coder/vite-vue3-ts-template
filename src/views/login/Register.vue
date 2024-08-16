<template>
    <el-form class="form" :model="userForm" :rules="registerRules" ref="userFormRef">
        <p class="title">Register</p>
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
        <el-button class="sign" @click="register(userFormRef)">Sign up</el-button>
        <p class="signup">
            Already have an account?
            <router-link to="/login">Sign in</router-link>
        </p>
    </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { userRegisterAPI } from "@/api/user";
import { useRouter } from "vue-router";
import type { FormInstance, FormRules } from "element-plus";

// 导入公共方法
import useUserForm from "./common/hooks/useUserForm";
import { UserForm } from "./common/types/index";
const { checkEmail, checkPassword, userForm, userFormRef } = useUserForm();

// 表单验证规则
const registerRules = reactive<FormRules<UserForm>>({
    email: [
        { required: true, message: "*Please input email.", trigger: "change" },
        { validator: checkEmail, trigger: "blur" },
    ],
    password: [
        { required: true, message: "*Please Create a password.", trigger: "change" },
        { validator: checkPassword, trigger: "change" },
    ],
});


// 注册
const router = useRouter();
const register = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            // 登录验证
            const res = await userRegisterAPI(userForm.email, userForm.password);
            console.log(res);
            if (res.success) {
                setTimeout(() => {
                    // 注册成功后跳转至登录页面
                    router.push("/login");
                }, 3e3);
            }
        }
    });
};

</script>

<style lang="less" scoped>
@import url("./common/style/index.less");
</style>
