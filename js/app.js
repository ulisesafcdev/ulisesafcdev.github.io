/* import headerFixed from "./modules/header.js";
import scrollTop from "./modules/scrollTop.js";

document.addEventListener('DOMContentLoaded', (e) => {
  headerFixed('cabezera');
  scrollTop('.btn-top');
}) */

const typed = new Typed('.npmi', {
  // strings: ['$ npm install ulisesafcdev^1000 <br> `installing dependencies...`^1000 <br> `installing good programmer...`^1000 <br> `installing skills...`^1000 <br><br> `installed HTML5`^1000 <br> `installed CSS3`^1000 <br> `installed JavaScript`^1000 <br> `installed Typescript`^1000 <br> `installed Node.js`^1000 <br> `installed PHP`^1000 <br> `installed MySQL`^1000 <br> `installed Git`^1000 <br> `...`^3000 <br> `Installation Finished`'],
  strings: [
    'npm install ulisesafcdev<br><br>`installing dependencies...`<br>`installing skills...`<br>`installing...`^2000 <br><br>`installed html5`<br>`installed css3`<br>`installed javascript`<br>`installed typescript`<br>`installed node`<br>`installed php`<br>`installed mysql`<br>`installed git`^2000 <br><br>`added 8 skills`<br>`found 0 vulnerabilities`^5000'
  ],
  backDelay: 1500,
  smartBackspace: true,
  cursorChar: '_',
  typeSpeed: 75,
  loop: true,
  loopCount: 1,
  contenType: 'html'
});