<img align="right" width="220" height="200" style="margin:auto;    width: 100%;" title="PostHTML" src="https://posthtml.github.io/posthtml/logo.svg">

# Format

## HTML

```html
<a class="animals" href="#">
  <span class="animals__cat" style="background: url(cat.png)">Cat</span>
</a>
```

## JSON

```js
[
  {
    tag: "a",
    attrs: {
      class: "animals",
      href: "#"
    },
    content: [
      "\n    ",
      {
        tag: "span",
        attrs: {
          class: "animals__cat",
          style: "background: url(cat.png)"
        },
        content: ["Cat"]
      },
      "\n"
    ]
  }
];
```
