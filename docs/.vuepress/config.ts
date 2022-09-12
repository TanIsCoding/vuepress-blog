import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "忐",
  description: "忐のBlog",
  base: "/",
  theme,
});
