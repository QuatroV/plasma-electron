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

export const searchTreeForManyItems = (
  element,
  matchingTitle,
  keyTitle,
  childrenTitle,
  resArr = [],
  nestingLevel = 0
) => {
  nestingLevel++;
  if (element[keyTitle].indexOf(matchingTitle) !== -1) {
    resArr.push(element);
  }
  if (element[childrenTitle] !== null) {
    for (let i = 0; i < element[childrenTitle].length; i++) {
      searchTreeForManyItems(
        element[childrenTitle][i],
        matchingTitle,
        keyTitle,
        childrenTitle,
        resArr,
        nestingLevel
      );
    }
  }
  if (nestingLevel === 1) {
    return resArr;
  }
};
