import countingSortByDigits from './counting.js';

const radixSort = (arr) => {
  if (arr.length === 0) return arr;
  const maxNum = Math.max(...arr);
  let result = arr;

  for (let i = 1; i < maxNum; i *= 10) {
    result = countingSortByDigits(result, i);
  }

  return result;
};

const arr = [4, 6, 43, 2];
console.log(radixSort(arr));
