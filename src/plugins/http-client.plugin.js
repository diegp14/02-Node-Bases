const axios = require('axios')

const httpClientPlugin = {
    get: async (url) => {
        try {
            const response = await axios.get(url);
            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            return response.data;
        } catch (error) {
            console.error('HTTP GET Error:', error);
            throw error;
        }
    },
    post: async (url, data) => {},
    put: async (url, data) => {},
    delete: async (url) => {},
};

module.exports = {
   httpClient: httpClientPlugin
    };