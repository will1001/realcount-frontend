import axios from "axios";

const axiosFetch = (method, url, data = {}, token) => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const headers = {};
  // const headers = {
  //   authorization: "Bearer " + token,
  // };

  const res = axios({
    method,
    url: base_url + url,
    headers,
    data,
  });

  return res;
};

export default axiosFetch;

// const axiosFetch = (method, url, data = {}) => {
//   const token = useSelector((state) => state.user.token);
//   const base_url = "https://api.sjpberkhidmat.id/";
//   const headers = {
//     authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
//   };

//   const res = axios({
//     method,
//     url: base_url + url,
//     headers,
//     data,
//   });

//   return res;
// };

// export default axiosFetch;
