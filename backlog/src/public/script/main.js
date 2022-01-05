const fetchWrapper = {
  get,
  post,
  put,
  delete: _delete,
};

const DEFAULT_HEADERS = () => {
  return {};
};

function get(url) {
  const requestOptions = {
    method: 'GET',
    headers: { ...DEFAULT_HEADERS() },
  };
  return fetch(url, requestOptions);
}

function post(url, body) {
  const requestOptions = {
    method: 'POST',
    headers: { ...DEFAULT_HEADERS(), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions);
}

function put(url, body) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...DEFAULT_HEADERS(), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  const requestOptions = {
    method: 'DELETE',
    headers: { ...DEFAULT_HEADERS() },
  };
  return fetch(url, requestOptions);
}
