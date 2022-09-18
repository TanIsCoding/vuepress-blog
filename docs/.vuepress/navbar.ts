import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "文章",
        icon: "note",
        prefix: "/posts/",
        children: [
            {
                text: "转载",
                prefix: "article/",
                children: ["前端 GitHub webhook自动打包.md"]
            },
        ],
    },
    '/about'
]);
