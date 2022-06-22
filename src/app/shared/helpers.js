export const checkValues = (...args) => {
  //   for (let i = 0; i < args.length; i++) {
  //     if (args[i] === '' || args[i] === 0) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  const result = args.some((param) => param === '');
  return result;
};
