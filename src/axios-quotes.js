import axios from 'axios';

const axiosQuotes = axios.create({
   baseURL: 'https://quotes-penluq.firebaseio.com/'
});

axiosQuotes.interceptors.request.use(req => {
   console.log('[Request]', req);
   return req;
});

axiosQuotes.interceptors.response.use(res => {
   console.log('[Response]', res);
   return res;
}, error => {
   console.log(error);
   throw error
});

export default axiosQuotes;