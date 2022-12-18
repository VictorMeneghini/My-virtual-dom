/*
  The render method will create a real DOM element
  that we can call it as Node or vNode (virtual node)
*/

const renderElementNode = ({tagName, attrs, children}) => {

  /*
    Create an $el element with the tagName of
    our vNode
  */
  const $el = document.createElement(tagName);

  /*
    Now we need to get all of attr of our vNode and
    set them to our new $el created before.
  */
  for (const [key, value] of  Object.entries(attrs)) {
  
    /*
      Basically we are adding the values like
      <p [key]=[value]></p> => <p id="my_paragraph"></p>
    */
    $el.setAttribute(key, value)
  }

  /*
   Now we need to go through all children's
   and make render for each of them.

   In the end we need append all of them
  */
  for (const child of children) {
    const $child = render(child)
    $el.appendChild($child)
  }

  return $el
}

const render = (vNode) => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode)
  }

  return renderElementNode(vNode)
}

export default render