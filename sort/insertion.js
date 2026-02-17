const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }

  return arr;
};

const numbers = [64, 34, 25, 12, 2, 22, 11, 91, 3];
console.log(insertionSort(numbers));
