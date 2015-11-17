# ios-resolutions

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> Takes an iOS ProductType and outputs a name and display resolution

## Install

```sh
npm i -D ios-resolutions
```

## Usage

```js
import iosResolutions from "ios-resolutions"

const display = iosResolutions.property({key: 'id', value: 'iPhone2,1'}); // {"id": 1, "width": 320, "height": 480}
```

## License

MIT © [Edward Knowles](http://github.com/eknowles)

[npm-url]: https://npmjs.org/package/ios-resolutions
[npm-image]: https://img.shields.io/npm/v/ios-resolutions.svg?style=flat-square

[travis-url]: https://travis-ci.org/eknowles/ios-resolutions
[travis-image]: https://img.shields.io/travis/eknowles/ios-resolutions.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/eknowles/ios-resolutions
[coveralls-image]: https://img.shields.io/coveralls/eknowles/ios-resolutions.svg?style=flat-square

[depstat-url]: https://david-dm.org/eknowles/ios-resolutions
[depstat-image]: https://david-dm.org/eknowles/ios-resolutions.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/ios-resolutions.svg?style=flat-square
