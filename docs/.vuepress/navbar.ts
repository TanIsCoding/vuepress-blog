import { navbar } from "vuepress-theme-hope";

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
        children: ["article1.md"],
      },
    ],
  },
]);
