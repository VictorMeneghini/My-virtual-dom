import render from './render';

const diff = (oldVTree, newVTree) => {
  if (newVTree === undefined) {
    return $node => {
      $node.remove()

      return undefined
    }
  }

  if (typeof oldVTree === "string" || typeof newVTree === "string") {
    if(oldVTree !== newVTree) {
      return $node => {
        const $newNode = render(newVTree)
        $node.replaceWith($newNode)
        return $newNode
      };
    } else {
      return $node => $node
    }
  }

  if (oldVTree.tagName !== newVTree.tagName) {
    // we assume that they are totally different and 
    // will not attempt to find the differences.
    // simply render the newVTree and mount it.
    return $node => {
      const $newNode = render(newVTree);
      $node.replaceWith($newNode);
      return $newNode;
    };
  }
}

export default diff;