# npm_lazy

A lazy local cache for npm

## Install

 1. `$ git clone https://github.com/bergerjac/npm_lazy.git` (clone repo)
 2. `$ npm install` (install dependencies)
 2. Optionally, edit *config.js* (e.g. port and external URL)
 3. `$ node server.js` (start the server)
 4. Point npm to npm_lazy by setting the registry (*choose one* of the following)
   - temporarily: `$ npm --registry http://localhost:6541/ install socket.io`
   - permanently: `$ npm config set registry http://localhost:6541/`
   - permanently via config file, `~/.npmrc` : `registry = http://localhost:6541/`

For more info: `$ npm help config` , `$ npm help registry`

## Configure

```js
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
```

### Caching Logic

_when a resource is requested..._

- `if (server.hasRestarted OR metadata.isExpired) -> fetch metadata`
- `if (NOT in local DB) -> fetch package from registry.npmjs.org`

### Why?

- **npm can be unreliable** - may be slow, down, or return random errors
- **Packages cached on local network** - making things faster and more predictable
- **No database to install, replicate or manage** - data is stored under ./db/ as JSON and tar files
- **Lazy caching** - when a package is requested the first time, it is cached locally; no explicit need to manage packages or replication
- **Metadata expires periodically** - (default: 1 hour) latest versions of packages are fetched
