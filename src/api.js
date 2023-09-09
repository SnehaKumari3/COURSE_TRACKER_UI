// src/api/api.js

import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:8081', // Set your API's base URL here
});

export default apiInstance;
