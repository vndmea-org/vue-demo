import axios from "axios";

function createAPI({ url, headers }) {
  delete headers.cookie;
  const instance = axios.create({
    baseURL: url,
    timeout: 30000,
    headers
  });

  instance.interceptors.request.use(
    function(req) {
      if (req.method === "get") {
        req.params = Object.assign({}, req.params, { _: Date.now() });
      }

      return req;
    },
    err => Promise.reject(err)
  );

  instance.interceptors.response.use(res => res, err => Promise.reject(err));

  return instance;
}

function apiCreator(headers) {
  return createAPI({
    url: "/api",
    headers: headers || {},
    withCredentials: true
  });
}

export function fetchData(params) {
  return apiCreator({}).get("/test", {params});
}
