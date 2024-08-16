<template>
    <ul id="nav">
        <!-- 收藏 -->
        <router-link to="/star">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69z"
                ></path>
            </svg>
            <span>star</span>
        </router-link>
        <!-- 主页 -->
        <router-link to="/home">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                ></path>
            </svg>
            <span>home</span>
        </router-link>
        <!-- 设置 -->
        <router-link to="/setting">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c.996.608 2.296.07 2.572-1.065"
                    ></path>
                    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path>
                </g>
            </svg>
            <span>setting</span>
        </router-link>
    </ul>
    <div id="user">
        <!-- 登录 -->
        <router-link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
                <path
                    fill="currentColor"
                    d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
                ></path>
            </svg>
        </router-link>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="less" scoped>
@com_font_family: Comic Sans MS, Comic Sans, cursive, Arial, sans-serif;

#nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
    padding: 10px 20px;
    // background-color: pink;
    border-bottom: 1px solid #ccc;
    font-family: @com_font_family;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: #000;
        text-decoration: none;
        padding: 5px 10px;
        border-radius: 5px;
        color: white;
        background-color: #000;

        &:hover {
            background-color: #313131;
        }
    }

    span {
        display: inline-block;
        vertical-align: top;
        // width: 1.4rem;
        // height: 1.4rem;
        // line-height: 1.4rem;
        // text-align: center;
    }

    svg {
        width: 1.4rem;
        height: 1.4rem;
    }
}

#user {
    position: absolute;
    top: 1.6rem;
    right: 1.2rem;
    width: 1.6875rem;
    height: 1.6875rem;
    line-height: 27px;
    text-align: center;
    border-radius: 50px;
    background-color: #eef2ff;
    border: 1px solid #ddd;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
