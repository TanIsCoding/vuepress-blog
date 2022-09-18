import {sidebar} from "vuepress-theme-hope";

export default sidebar([
    "/",
    {
        text: "文章",
        icon: "note",
        prefix: "/articles/",
        children: [
            {
                text: "转载",
                collapsable: true,
                prefix: "reprint/",
                children: ["article1/README.md"]
            },
        ],
    },
    'about'
]);
