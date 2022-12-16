/*
  The render method will create a real DOM element
  that we can call it as Node or vNode (virtual node)
*/

const render = (vNode) => {

  /*
    Create an $el element with the tagName of
    our vNode
  */
  const $el = document.createElement(vNode.tagName);

  /*
    Now we need to get all of attr of our vNode and
    set them to our new $el created before.
  */
  for (const [key, value] of  Object.entries(vNode.attrs)) {
  
    /*
      Basically we are adding the values like
      <p [key]=[value]></p> => <p id="my_paragraph"></p>
    */
    $el.setAttribute(key, value)
  }

  /*
   Now we need to go through all children's
   and make an render for each of them.

   In the end we need append all of them
  */
  for (const child of vNode.children) {
    const $child = render(child)
    $el.appendChild($child)
  }

  return $el
}

export default render