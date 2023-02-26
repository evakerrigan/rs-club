
export function getCookie(cookieName: string) {
  const cookie: { [key: string]: string } = {};
  document.cookie.split(';').forEach((el) => {
    const [key, value] = el.split('=');
    cookie[key.trim()] = decodeURIComponent(value);
  });
  return cookie[cookieName];
}
