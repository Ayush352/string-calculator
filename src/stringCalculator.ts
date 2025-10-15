const add = (numbers: string): number => {
  let delimiter = /[,\s\n]+/;
  let numberString = numbers;

  const escapeRegexCharacters = (text: string): string => {
    const specialChars = ["*","+","?",".","^","$","{","}","(",")","|","[","]","\\",];
    let result = text;
    for (const char of specialChars) {
      result = result.split(char).join("\\" + char);
    }
    return result;
  };

  if (numbers === "") {
    return 0;
  }

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const customDelimiter = parts[0].substring(2);
    const escapedDelimiter = escapeRegexCharacters(customDelimiter);
    delimiter = new RegExp(escapedDelimiter);
    numberString = parts[1];
  }

  const nums = numberString
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
