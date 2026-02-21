const countingSort = (arr) => {
  if (arr.length <= 0) return arr;

  const min = Math.min(...arr);
  const size = Math.max(...arr) - min + 1;
  const mockArr = new Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    mockArr[arr[i] - min]++;
  }

  let preIndex = 0;
  for (let i = 0; i < size; i++) {
    if (i === 0) {
      preIndex = mockArr[i];
      mockArr[i] = 0;
    } else {
      const curIndex = mockArr[i];
      mockArr[i] = preIndex;
      preIndex = curIndex + preIndex;
    }
  }
  const sortedArr = [];

  for (let i = 0; i < arr.length; i++) {
    const index = mockArr[arr[i] - min];
    sortedArr[index] = arr[i];
    mockArr[arr[i] - min] += 1;
  }
  return sortedArr;
};

// const arr = [4, 22, 4, 6, 3, 7, 3, 9, -3];
// console.log(countingSort(arr));

const countingSortByDigits = (arr, exp) => {
  if (arr.length <= 0) return arr;

  const size = 10;
  const mockArr = new Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    mockArr[digit]++;
  }

  for (let i = 1; i < size; i++) {
    mockArr[i] += mockArr[i - 1];
  }
  const sortedArr = new Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    sortedArr[mockArr[digit] - 1] = arr[i];
    mockArr[digit]--;
  }

  return sortedArr;
};

export default countingSortByDigits;
