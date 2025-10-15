import { describe, it, expect } from 'vitest';
import stringCalculator from './stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(stringCalculator.add('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(stringCalculator.add('1')).toBe(1);
    expect(stringCalculator.add('5')).toBe(5);
  });

  it('should return sum of two comma-separated numbers', () => {
    expect(stringCalculator.add('1,2')).toBe(3);
    expect(stringCalculator.add('10,20')).toBe(30);
  });
});