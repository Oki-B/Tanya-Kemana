import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000/', // developmentcd
    // baseURL: 'https://hck78.syaokibiek.com'
  });

  // export default instance