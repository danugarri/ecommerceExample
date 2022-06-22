export const checkValues = (...args) => {
  const result = args.some((param) => param === '');

  return result;
};
