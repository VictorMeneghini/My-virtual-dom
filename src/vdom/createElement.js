/* 
  This method works like a factory. It will return
  an object which will create the model of an $el (HTML element).

  in other hands, it needs receive an html tag name like:
  div, span, p, h1 and etc...

  and then, if you want to set some attribute for your HTML tag
  you need to pass through the `attrs` param.

  If you element have any children, they need to be another
  HTML element and you can pass it through the children param.

*/

export default (tagName, {attrs = {}, children = []} = {}) => {
  return {
    tagName,
    attrs,
    children
  }
}