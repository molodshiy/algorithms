const quickSort = (arr, left, right) => {
  if (left >= right) return arr;
  let lowIndex = left - 1;
  let pivot = arr[right];

  for (let highIndex = left; highIndex < right; highIndex++) {
    if (arr[highIndex] <= pivot) {
      lowIndex++;
      [arr[lowIndex], arr[highIndex]] = [arr[highIndex], arr[lowIndex]];
    }
  }

  const pivotIndex = lowIndex + 1;
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);

  return arr;
};

const arr = [3, 2, 1, 4, 0, -6, 77];

console.log(quickSort(arr, 0, arr.length - 1));
