function setConfigValue(key, value) {
  window.localStorage.setItem(key, value);
}

function readConfigValue(key) {
  window.localStorage.getItem(key);
}

function deleteConfigValue(key) {
  window.localStorage.removeItem(key);
}

function setCookieValue(name, value, expiresInDays) {
  const expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + expiresInDays);

  document.cookie = `${name}=${JSON.stringify(value)};expires=${expireDate}`;
}

function readCookieValue(name) {
  const re = new RegExp(`${name}=(.*);?`);
  const match = re.exec(document.cookie);

  return match !== null ? JSON.parse(match[1]) : null;
}

export {
  setConfigValue,
  readConfigValue,
  deleteConfigValue,
  setCookieValue,
  readCookieValue,
};
