import headerFixed from "./modules/header.js";
import scrollTop from "./modules/scrollTop.js";

document.addEventListener('DOMContentLoaded', (e) => {
    headerFixed('cabezera');
    scrollTop('.btn-top');
})