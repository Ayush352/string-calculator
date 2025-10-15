const add = (numbers: string): number => {
  let delimiter = /[,\s\n]+/;

  if (numbers === "") {
    return 0;
  }
  const nums = numbers
    .split(delimiter)
    .filter((n) => n != "")
    .map((n) => parseInt(n));
    
  return nums.reduce((sum, num) => sum + num, 0);
};

const stringCalculator = {
  add,
};

export default stringCalculator;
