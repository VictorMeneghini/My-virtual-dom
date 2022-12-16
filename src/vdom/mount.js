/* 
  The mount method will replace the node
  of real DOM to our virtual DOM

  So, the $node should be our virtualNode
  and the $target should be a real node
  in the DOM
*/

export default ($node, $target) => {
  $target.replaceWith($node)
  return $node
}