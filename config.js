module.exports = {

    // (full path to) directory to store cached packages
    cacheDirectory: __dirname + '/db/',

    // maximum duration (in milliseconds) before an index is refreshed from npm
    cacheAge: 1000 * 60 * 60,

    // external url to npm_lazy, no trailing /
    externalUrl: 'http://localhost:6541',

    // bind port and host
    port: 6541,
    host: 'localhost'
};