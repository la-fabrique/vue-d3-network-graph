import { createApp } from "vue";
import Index from "./Index.vue";
import graph from "@/index";

createApp(Index).use(graph).mount("#app");
