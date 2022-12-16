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