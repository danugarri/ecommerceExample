export const checkValues = (...args) => {
  const result = args.some((param) => param === '');

  return result;
};

// COOKIES
export const initialCookie = (initialReduxState) => {
  // 1 day cookie
  if (!document.cookie) {
    // cartBadge counter
    document.cookie = `ordersCounter=0;max-age=60*60*24;path=/`;
    // orders cookie
    document.cookie = `orders=${JSON.stringify(initialReduxState)};max-age=60*60*24;`;
    // document.cookie = 'orders=0;max-age=0';
  }
};
export function readCookie(name) {
  return document.cookie.replace(
    new RegExp(
      '(?:(?:^|.*;)\\s*' + name.replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'
    ),
    '$1'
  );
}
export const updateCookie = (newOrder) => {
  // store the cookie ordersCounter Value
  const ordersCounterCookie = Number(readCookie('ordersCounter'));
  // orders
  const orders = JSON.parse(readCookie('orders'));
  // update cookies value
  document.cookie = `ordersCounter=${ordersCounterCookie + 1};max-age=60*60*24`;
  document.cookie = `orders=${JSON.stringify([...orders, newOrder])};max-age=60*60*24`;
};
export const deleteCookie = () => {
  document.cookie = `ordersCounter=0;max-age=0`;
  document.cookie = 'orders=0;max-age=0';
};

//  LOCAL STORAGE
// update localStorage
export const updateLocalStorage = (newOrder) => {
  // localStorage.clear();
  // orders
  const orders = JSON.parse(localStorage.getItem('orders'));
  localStorage.setItem('orders', `${JSON.stringify([...orders, newOrder])}`);
};
