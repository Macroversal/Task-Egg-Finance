const axios = require('axios');

// Define the base URL of the API you're working with
const BASE_URL = 'https://api.example.com';

// Function to make a GET request to retrieve data
async function getData(endpoint) {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        // Handle any errors here (e.g., log or throw an error)
        console.error('Error while fetching data:', error);
        throw error;
    }
}

// Function to make a POST request to send data
async function postData(endpoint, data) {
    try {
        const response = await axios.post(`${BASE_URL}${endpoint}`, data);
        return response.data;
    } catch (error) {
        // Handle any errors here (e.g., log or throw an error)
        console.error('Error while sending data:', error);
        throw error;
    }
}

module.exports = { getData, postData };
