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

const arr = [4, 22, 4, 6, 3, 7, 3, 9, -3];
console.log(countingSort(arr));
