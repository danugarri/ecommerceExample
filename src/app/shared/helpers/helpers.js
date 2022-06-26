export const checkValues = (...args) => {
  const result = args.some((param) => param === '');

  return result;
};

// COOKIES
export const initialCookie = () => {
  // 1 day cookie
  if (!document.cookie) {
    document.cookie = `ordersCounter=0;max-age=60*60*24`;
  }
};
function readCookie(name) {
  return document.cookie.replace(
    new RegExp(
      '(?:(?:^|.*;)\\s*' + name.replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'
    ),
    '$1'
  );
}
export const updateCookie = () => {
  // store the cookie ordersCounter Value
  const ordersCounterCookie = Number(readCookie('ordersCounter'));
  document.cookie = `ordersCounter=${ordersCounterCookie + 1};max-age=60*60*24`;
};
