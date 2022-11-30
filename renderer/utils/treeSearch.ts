export const searchTree = (element, matchingTitle, keyTitle, childrenTitle) => {
  if (element[keyTitle] === matchingTitle) {
    return element;
  } else if (element[childrenTitle] !== null) {
    let result = null;
    for (let i = 0; result === null && i < element[childrenTitle].length; i++) {
      result = searchTree(
        element[childrenTitle][i],
        matchingTitle,
        keyTitle,
        childrenTitle
      );
    }
    return result;
  }
  return null;
};
