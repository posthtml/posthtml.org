[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][code-style]][code-style-url]
[![Twitter][twitter]][twitter-url]
[![Chat][chat]][chat-url]

# PostHTML

<img align="right" width="220" height="200" style="margin:auto;    width: 100%;" title="PostHTML" src="https://posthtml.github.io/posthtml/logo.svg">

PostHTML is a tool for transforming HTML/XML with JS plugins. PostHTML itself is very small. It includes only a HTML parser, a HTML node tree API and a node tree stringifier.

All HTML transformations are made by plugins. And these plugins are just small plain JS functions, which receive a HTML node tree, transform it, and return a modified tree.

For more detailed information about PostHTML in general take a look at the [docs][docs-url]

## Maintainers

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars0.githubusercontent.com/u/2789192?s=460&v=4">
      <br />
      <a href="https://github.com/scrum">Ivan Demidov</a>
    </td>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/1510217?v=3&s=150">
      <br />
      <a href="https://github.com/voischev">Ivan Voischev</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](plugins/guide.md) and [CONTRIBUTING](CONTRIBUTING.md).

## Contributors

<a href="https://github.com/posthtml/posthtml/graphs/contributors"><img src="https://opencollective.com/posthtml/contributors.svg?width=890&button=false" /></a>

## LICENSE

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml.svg
[npm-url]: https://npmjs.com/package/posthtml
[deps]: https://david-dm.org/posthtml/posthtml.svg
[deps-url]: https://david-dm.org/posthtml/posthtml
[build]: https://travis-ci.org/posthtml/posthtml.svg?branch=master
[build-url]: https://travis-ci.org/posthtml/posthtml?branch=master
[cover]: https://coveralls.io/repos/posthtml/posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/r/posthtml/posthtml?branch=master
[code-style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[code-style-url]: http://standardjs.com/
[twitter]: https://img.shields.io/badge/twitter-%40PostHTML-00ACEE.svg?style=flat
[twitter-url]: https://twitter.com/PostHTML
[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-url]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
[docs-url]: https://github.com/posthtml/posthtml/tree/master/docs
