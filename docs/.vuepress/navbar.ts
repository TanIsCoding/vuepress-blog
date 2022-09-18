import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "文章",
        icon: "note",
        prefix: "/articles/",
        children: [
            {
                text: "转载",
                prefix: "reprint/",
                children: ["article1/README.md"]
            },
        ],
    },
    '/about'
]);
