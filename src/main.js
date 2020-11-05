import { createApp } from "vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faHourglassHalf,
  faTools,
  faUsers,
  faHistory,
  faBuilding,
  faInfo,
  faBook,
  faBalanceScaleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faHourglassHalf,
  faTools,
  faUsers,
  faHistory,
  faBuilding,
  faInfo,
  faBook,
  faBalanceScaleLeft
);

import App from "./App.vue";
import router from "./router.js";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

const app = createApp(App);
app.use(router);
app.config.productionTip = false;

app.component("the-header", TheHeader);
app.component("the-footer", TheFooter);
app.component("fa-icon", FontAwesomeIcon);
app.mount("#app");
