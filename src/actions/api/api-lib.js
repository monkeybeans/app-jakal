import api from 'superagent';

const ORIGIN = window.location.origin !== null ? window.location.origin : 'http://dev.null';
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_PARTIAL_CONTENT = 206;


const isNumberWithin = number => (min, max) => number <= max && number >= min;

const get = (url, query) => new Promise((resolve, reject) => {
  api
  .get(`${ORIGIN}/${url}`)
  .query(query)
  .set('Accept', 'application/json; utf-8')
  .end((error, response = {}) => {
    const status = response.status;

    if (error || !isNumberWithin(status)(HTTP_STATUS_OK, HTTP_STATUS_PARTIAL_CONTENT)) {
      reject(error);
    } else {
      const data = response.body;
      resolve({
        status,
        data,
      });
    }
  });
});

const post = (url, data) => new Promise((resolve, reject) => {
  api
  .post(`${ORIGIN}/${url}`)
  .send(data)
  .set('Accept', 'application/json; utf-8')
  .set('Content-Type', 'application/json; utf-8')
  .end((error, response = {}) => {
    const status = response && response.status;

    if (error || !isNumberWithin(status)(HTTP_STATUS_OK, HTTP_STATUS_PARTIAL_CONTENT)) {
      reject(error);
    } else {
      const body = response.body;
      resolve({
        status,
        data: body,
      });
    }
  });
});

const put = (url, data) => new Promise((resolve, reject) => {
  api
  .put(`${ORIGIN}/${url}`)
  .send(data)
  .set('Accept', 'application/json; utf-8')
  .set('Content-Type', 'application/json; utf-8')
  .end((error, response = {}) => {
    const status = response.status;

    if (error || !isNumberWithin(status)(HTTP_STATUS_OK, HTTP_STATUS_PARTIAL_CONTENT)) {
      reject(error);
    } else {
      const body = response.body;
      resolve({
        status,
        data: body,
      });
    }
  });
});

export default {
  post,
  put,
  get,
};
