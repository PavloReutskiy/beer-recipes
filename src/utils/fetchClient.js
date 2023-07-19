const BASE_URL = 'https://api.punkapi.com/v2';

function request(url, method = 'GET') {
  const options = { method };

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
};

export const client = {
  get: (url) => request(url)
}
