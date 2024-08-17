<template>
    <div id="main">
        <nav id="navigation" ref="navRef">
            <Aside></Aside>
        </nav>
        <div id="content">
            <Content></Content>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import Aside from "../aside/Aside.vue";
import Content from "../content/Content.vue";

import { useRoute } from 'vue-router';
const route = useRoute();

// 当用户跳转至登录页面时，F5刷新页面时，导航栏会出现闪烁，因此通过判断路由跳转的目的地来控制导航栏的 显示/隐藏
const navRef = ref();
watch(() => route.path,() => {
    if(route.path == '/login' || route.path == '/register') {
        navRef.value.style.display = "none";
    }else {
        navRef.value.style.display = "block";
    }
})

</script>
<style lang="less" scoped>
#navigation {
    display: none;
}
</style>
