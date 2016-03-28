walk(document.body);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E

  var child, next;

  if (!node || (node.tagName && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'))) {
    return;
  }

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode){

  var v = textNode.nodeValue;

  v = v.replace(/\bBase ball?\b/g, "Bartolo");
  v = v.replace(/\bbase ball?\b/g, "Bartolo");
  v = v.replace(/\bBaseball?\b/g, "Bartolo");
  v = v.replace(/\bbaseball?\b/g, "Bartolo");
  v = v.replace(/\bBaseballs?\b/g, "Bartolos");
  v = v.replace(/\bbaseballs?\b/g, "Bartolos");

  textNode.nodeValue = v;
}

