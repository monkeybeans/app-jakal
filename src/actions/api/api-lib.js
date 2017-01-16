const HTTP_STATUS_OK = 200;
const HTTP_STATUS_NO_CONTENT = 204;
const XHR_STATUS_DONE = 4;

const baseUrl = `${location.protocol}//${location.host}/api/v1/`;

const post = (url, data) => new Promise((res, rej) => {
  const cleanUrl = url.replace(/^\//, '');
  const xhr = new XMLHttpRequest();

  xhr.open('POST', `${baseUrl}/${cleanUrl}`);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  xhr.send(JSON.stringify(data));

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XHR_STATUS_DONE) {
      if (HTTP_STATUS_OK <= xhr.status && xhr.status <= HTTP_STATUS_NO_CONTENT) {
        res(xhr.response, xhr.status);
      } else {
        rej(`Could not perform the request, status: ${xhr.status}`);
      }
    }
  };
});

const put = (url, data) => new Promise((res, rej) => {
  const cleanUrl = url.replace(/^\//, '');
  const xhr = new XMLHttpRequest();

  xhr.open('PUT', `${baseUrl}/${cleanUrl}`);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  xhr.send(JSON.stringify(data));

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XHR_STATUS_DONE) {
      if (HTTP_STATUS_OK <= xhr.status && xhr.status <= HTTP_STATUS_NO_CONTENT) {
        res(xhr.response, xhr.status);
      } else {
        rej(`Could not perform the request, status: ${xhr.status}`);
      }
    }
  };
});

const get = (url, query) => new Promise((res, rej) => {
  const cleanUrl = url.replace(/^\//, '');
  const queryString = query && typeof query === 'object' ?
    Object.keys(query).map(k => `${k}=${query[k]}`).join('&') : query || '';

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${baseUrl}/${cleanUrl}?${queryString}`);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XHR_STATUS_DONE) {
      if (HTTP_STATUS_OK <= xhr.status && xhr.status <= HTTP_STATUS_NO_CONTENT) {
        let body = xhr.response;
        try {
          body = JSON.parse(body);
        } catch (e) {
          console.log(`${cleanUrl} responded with non JSON, using raw. `);
        }

        res(body, xhr.status);
      } else {
        rej('Could not perform the request.');
      }
    }
  };
});

export default {
  post,
  put,
  get,
};
