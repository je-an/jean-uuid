## Description

Provides functionality for creation of uuids
Implemented by instructions of https://www.famkruithof.net/guid-uuid-random.html

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Uuid is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
// Generates an uuid formatted like:
// 00000000-0000-0000-0000-000000000000
var uuid = Uuid.generate();
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

### Uuid.generate() 

Generates a uuid

**Returns**
- `String` -  The generated uuid

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT