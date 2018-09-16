## Description

Provides functionality for creation of uuids

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Uuid is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new Uuid();
```
- Use it with require.js
```js
require(["path/to/Uuid"], function(Uuid){
    // Work with Uuid
});
```
- Use it with node.js
```js
var Uuid = require("jean-uuid");
```
## Installation

`npm install jean-uuid --save --legacy-bundling`

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT