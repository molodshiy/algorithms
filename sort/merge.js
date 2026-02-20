const merge = (leftHalf, rightHalf) => {
  let result = [];
  let i = 0,
    j = 0;
  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      result.push(leftHalf[i]);
      i++;
    } else {
      result.push(rightHalf[j]);
      j++;
    }
  }

  while (i < leftHalf.length) {
    result.push(leftHalf[i]);
    i++;
  }

  while (j < rightHalf.length) {
    result.push(rightHalf[j]);
    j++;
  }

  return result;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = mergeSort(arr.slice(0, mid));
  const rightHalf = mergeSort(arr.slice(mid));

  return merge(leftHalf, rightHalf);
};

const arr = [5, 3, 2, 87, 9, 65, 0, -2, 7];
console.log(mergeSort(arr, 0, arr.length - 1));
