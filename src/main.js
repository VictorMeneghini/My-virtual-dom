/*    
  The main.js will be the entry point of my application.
  It needs be imported inside of an HTML file to get access to
  the DOM api.
*/

import createElement from "./vdom/createElement"
import render from "./vdom/render"
import mount from "./vdom/mount"
import diff from "./vdom/diff"

const createVApp = count => createElement("div", {
  attrs: {
    id: "app"
  },
  children: [
    "hello world",
    String(count),
    createElement("img", {
      attrs: {
        src: "https://onlygoodanimes.files.wordpress.com/2012/12/uchuu-kyoudai-1.jpg"
      }
    })
  ]
})

let count = 0;
let vApp = createVApp(count)
const $app = render(vApp)
let $rootEl = mount($app, document.getElementById("app"))

setInterval(() => {
  count++;
  const vNewApp = createVApp(count)
  const patch = diff(vApp, vNewApp);

  // we might replace the whole $rootEl,
  // so we want the patch will return the new $rootEl
  $rootEl = patch($rootEl);

  vApp = vNewApp;
}, 1000);

console.log($app)