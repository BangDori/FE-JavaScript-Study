import { activeEventListner } from "./event.js";
import { getTime } from "./clock.js";

const init = () => {
    setInterval(getTime, 10);
    activeEventListner();
};

init();