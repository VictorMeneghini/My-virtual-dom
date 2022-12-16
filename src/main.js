/*    
  The main.js will be the entry point of my application.
  It needs be imported inside of an HTML file to get access to
  the DOM api.
*/

import createElement from "./vdom/createElement"
import render from "./vdom/render"
import mount from "./vdom/mount"

const vApp = createElement("div", {
  attrs: {
    id: "app"
  },
  children: [
    createElement("img", {
      attrs: {
        src: "https://onlygoodanimes.files.wordpress.com/2012/12/uchuu-kyoudai-1.jpg"
      }
    })
  ]
})

const $app = render(vApp)
mount($app, document.getElementById("app"))

console.log($app)