import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
        server: {
            host: "0.0.0.0",
            port: 5173,

            // 配置代理
            proxy: {
                // 选项写法
                [env.VITE_APP_BASE_API]: {
                    // 请求接口前缀
                    target: env.VITE_SERVER,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
        resolve: {
            alias: {
                // 配置文件路径别名
                "@": resolve(__dirname, "src"),
            },
        },
    };
});
