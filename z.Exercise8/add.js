// 2. Add numbers
export const addNumber = (...numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};
