<img align="right" width="220" height="200" style="margin:auto;    width: 100%;" title="PostHTML" src="https://posthtml.github.io/posthtml/logo.svg">

# Usage

## API

**Sync**

```js
import posthtml from "posthtml";

const html = `
  <component>
    <title>Super Title</title>
    <text>Awesome Text</text>
  </component>
`;

const result = posthtml()
  .use(require("posthtml-custom-elements")())
  .process(html, { sync: true }).html;

console.log(result);
```

```html
<div class="component">
  <div class="title">Super Title</div>
  <div class="text">Awesome Text</div>
</div>
```

> :warning: Async Plugins can't be used in sync mode and will throw an Error. It's recommended to use PostHTML asynchronously whenever possible.

**Async**

```js
import posthtml from "posthtml";

const html = `
  <html>
    <body>
      <p class="wow">OMG</p>
    </body>
  </html>
`;

posthtml([
  require("posthtml-to-svg-tags")(),
  require("posthtml-extend-attrs")({
    attrsTree: {
      ".wow": {
        id: "wow_id",
        fill: "#4A83B4",
        "fill-rule": "evenodd",
        "font-family": "Verdana"
      }
    }
  })
])
  .process(html /*, options */)
  .then(result => console.log(result.html));
```

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <text
    class="wow"
    id="wow_id"
    fill="#4A83B4"
    fill-rule="evenodd"
    font-family="Verdana"
  >
    OMG
  </text>
</svg>
```

**Directives**

```js
import posthtml from "posthtml";

const php = `
  <component>
    <title><?php echo $title; ?></title>
    <text><?php echo $article; ?></text>
  </component>
`;

const result = posthtml()
  .use(require("posthtml-custom-elements")())
  .process(html, {
    directives: [{ name: "?php", start: "<", end: ">" }]
  }).html;

console.log(result);
```

```html
<div class="component">
  <div class="title"><?php echo $title; ?></div>
  <div class="text"><?php echo $article; ?></div>
</div>
```

## CLI

```bash
npm i posthtml-cli
```

```json
"scripts": {
  "posthtml": "posthtml -o output.html -i input.html -c config.json"
}
```

```bash
npm run posthtml
```

## Gulp

```bash
npm i -D gulp-posthtml
```

```js
import tap from "gulp-tap";
import posthtml from "gulp-posthtml";
import { task, src, dest } from "gulp";

task("html", () => {
  let path;

  const plugins = [require("posthtml-include")({ root: `${path}` })];
  const options = {};

  src("src/**/*.html")
    .pipe(tap(file => (path = file.path)))
    .pipe(posthtml(plugins, options))
    .pipe(dest("build/"));
});
```

Check [project-stub](https://github.com/posthtml/project-stub) for an example with Gulp

## Grunt

```bash
npm i -D grunt-posthtml
```

```js
posthtml: {
  options: {
    use: [
      require('posthtml-doctype')({ doctype: 'HTML 5' }),
      require('posthtml-include')({ root: './', encoding: 'utf-8' })
    ]
  },
  build: {
    files: [
      {
        dot: true,
        cwd: 'html/',
        src: ['*.html'],
        dest: 'tmp/',
        expand: true,
      }
    ]
  }
}
```

## Webpack

```bash
npm i -D html-loader posthtml-loader
```

### v1.x

**webpack.config.js**

```js
const config = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "html!posthtml"
      }
    ]
  },
  posthtml: ctx => ({
    parser: require("posthtml-pug"),
    plugins: [require("posthtml-bem")()]
  })
};

export default config;
```

### v2.x

**webpack.config.js**

```js
import { LoaderOptionsPlugin } from "webpack";

const config = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          },
          {
            loader: "posthtml-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new LoaderOptionsPlugin({
      options: {
        posthtml(ctx) {
          return {
            parser: require("posthtml-pug"),
            plugins: [require("posthtml-bem")()]
          };
        }
      }
    })
  ]
};

export default config;
```

## Rollup

```bash
$ npm i rollup-plugin-posthtml -D
# or
$ npm i rollup-plugin-posthtml-template -D
```

```js
import { join } from "path";

import posthtml from "rollup-plugin-posthtml-template";
// or
// import posthtml from 'rollup-plugin-posthtml';

import sugarml from "posthtml-sugarml"; // npm i posthtml-sugarml -D
import include from "posthtml-include"; // npm i posthtml-include -D

export default {
  entry: join(__dirname, "main.js"),
  dest: join(__dirname, "bundle.js"),
  format: "iife",
  plugins: [
    posthtml({
      parser: sugarml(),
      plugins: [include()],
      template: true // only rollup-plugin-posthtml-template
    })
  ]
};
```
