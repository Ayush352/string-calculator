const add = (numbers: string): number => {
  if (numbers === '') {
    return 0;
  }
  const nums = numbers.split(',').map(n => parseInt(n));
  return nums.reduce((sum, num) => sum + num, 0);
};

const stringCalculator = {
  add
};

export default stringCalculator;