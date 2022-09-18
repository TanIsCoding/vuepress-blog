import {sidebar} from "vuepress-theme-hope";

export default sidebar([
    "/",
    {
        text: "文章",
        icon: "note",
        prefix: "/posts/",
        children: [
            {
                text: "转载",
                collapsable: true,
                prefix: "article/",
                children: ["article1/前端 GitHub webhook自动打包.md"]
            },
        ],
    },
    'about'
]);
