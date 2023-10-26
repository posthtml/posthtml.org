[![NPM][npm]][npm-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Twitter][twitter]][twitter-url]

# PostHTML

<img align="right" width="220" height="200" style="margin:auto;    width: 100%;" title="PostHTML" src="https://posthtml.github.io/posthtml/logo.svg">

PostHTML is a tool for transforming HTML/XML with JS plugins. PostHTML itself is very small. It includes only a HTML parser, a HTML node tree API and a node tree stringifier.

All HTML transformations are made by plugins. And these plugins are just small plain JS functions, which receive a HTML node tree, transform it, and return a modified tree.

For more detailed information about PostHTML in general take a look at the [docs][docs-url]

## Who's Using Posthtml ?
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/maizzle">
      <img width="150 height="150" src="https://github.com/maizzle.png?size=150">
      <br />
      Maizzle
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/parcel-bundler">
      <img width="150 height="150" src="https://github.com/parcel-bundler.png?size=150">
      <br />
      Parcel
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/webpack-contrib/html-loader">
      <img width="150 height="150" src="https://github.com/webpack-contrib.png?size=150">
      <br />
      webpack-contrib
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/11ty/eleventy-plugin-rss">
      <img width="150 height="150" src="https://github.com/11ty.png?size=150">
      <br />
      Eleventy
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/JetBrains/svg-mixer">
      <img width="150 height="150" src="https://github.com/JetBrains.png?size=150">
      <br />
      JetBrains
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/chromeos/create-vite-pwa">
      <img width="150 height="150" src="https://github.com/chromeos.png?size=150">
      <br />
      Chrome OS 
      </a>
    </td>
  </tr>
</table>

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
    <td align="center">
      <img width="150 height="150"
      src="https://github.com/anikethsaha.png?size=150">
      <br />
      <a href="https://github.com/anikethsaha">Aniketh Saha</a>
    </td>
    <td align="center">
      <img width="150 height="150"
      src="https://github.com/cossssmin.png?size=150">
      <br />
      <a href="https://github.com/cossssmin">Cosmin Popovici</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](plugins/guide.md) and [CONTRIBUTING](CONTRIBUTING.md).

## Contributors

<a href="https://github.com/posthtml/posthtml/graphs/contributors"><img src="https://opencollective.com/posthtml/contributors.svg?width=890&button=false" /></a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/posthtml#backer)]

<a href="https://opencollective.com/posthtml#backers" target="_blank"><img src="https://opencollective.com/posthtml/backers.svg?width=885&button=false"></a>

## LICENSE

[MIT](LICENSE)


[npm]: https://img.shields.io/npm/v/posthtml.svg
[npm-url]: https://npmjs.com/package/posthtml

[build]: https://github.com/posthtml/posthtml/workflows/Actions%20Status/badge.svg?style=flat-square
[build-url]: https://github.com/posthtml/posthtml/actions?query=workflow%3A%22CI+tests%22

[cover]: https://coveralls.io/repos/posthtml/posthtml/badge.svg?branch=master
[cover-url]: https://coveralls.io/r/posthtml/posthtml?branch=master

[twitter]: https://badgen.net/badge/icon/PostHTML?icon=twitter&label
[twitter-url]: https://twitter.com/PostHTML
