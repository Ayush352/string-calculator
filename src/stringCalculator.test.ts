import { describe, it, expect } from "vitest";
import stringCalculator from "./stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalculator.add("")).toBe(0);
  });

  it("should return the number itself for a single number", () => {
    expect(stringCalculator.add("1")).toBe(1);
    expect(stringCalculator.add("5")).toBe(5);
  });

  it("should return sum of two comma-separated numbers", () => {
    expect(stringCalculator.add("1,2")).toBe(3);
    expect(stringCalculator.add("10,20")).toBe(30);
  });

  it("should handle multiple numbers", () => {
    expect(stringCalculator.add("1,2,3,4")).toBe(10);
    expect(stringCalculator.add("1,2,3,4,5")).toBe(15);
  });

  it("should handle space-separated numbers", () => {
    expect(stringCalculator.add("4 5 6")).toBe(15);
    expect(stringCalculator.add("1 2 3")).toBe(6);
    expect(stringCalculator.add("1  2   3")).toBe(6);
  });

  it("should handle newlines as delimiters", () => {
    expect(stringCalculator.add("1\n2,3")).toBe(6);
    expect(stringCalculator.add("1\n2\n3")).toBe(6);
    expect(stringCalculator.add("1\n2\n")).toBe(3);
  });
});
