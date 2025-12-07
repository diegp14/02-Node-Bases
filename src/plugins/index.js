
const { getId } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { httpClient } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');

module.exports = {
    getId,
    getAge,
    httpClient,
    buildLogger,
};