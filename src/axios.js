import axios from 'axios';

// Instance for API 1
const TerraformAPI = axios.create({
    // baseURL: 'http://140.116.234.116:9711'
});

// Instance for API 2
const AnsibleAPI = axios.create({
    // baseURL: 'http://140.116.234.116:1092'
});

const BackendAPI = axios.create({
    // baseURL: 'http://localhost:8003'
});

export { TerraformAPI, AnsibleAPI, BackendAPI};