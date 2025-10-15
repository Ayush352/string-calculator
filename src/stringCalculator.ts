const add = (numbers: string): number => {
  let delimiter = /[,\s\n]+/;

  if (numbers === "") {
    return 0;
  }
  const nums = numbers
    .split(delimiter)
    .filter((n) => n != "")
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
};

const stringCalculator = {
  add,
};

export default stringCalculator;
