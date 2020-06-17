# 11ty-to-codepen

## A simple 11ty shortcode for automagically creating pens on codepen!

### Prerequisites

There is only one hard requirement (assuming that eleventy is already in place) and that is to allow html in the markdown files.
Eleventy defaults to `html: false` which is also the default for the markdown-it Library.

- Make sure to enable it in your configuration!
- Eg:

```js
/* Markdown Overrides */
let markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
});
eleventyConfig.setLibrary("md", markdownLibrary);
```

### Installation

Installation should follow the usual NODE dance:

```bash
npm i -D 11ty-to-codepen
```

### Usage

First configure your .eleventy.js:

- Import it:

```js
// At the top of the file add:
const codepenIt = require("11ty-to-codepen");

// Somewhere before the final return add:
eleventyConfig.addPairedShortcode("codepen", codepenIt);
```

- Use it in any `.md` file:

````md
{% codepen "https://unpkg.com/bonsai.css@latest/dist/bonsai.min.css", "https://unpkg.com/uhtml", "Heyyy", "Waz uuuuuuuup", "Test it" %}

Some very important code:

```html
<h1 class="someClass">Test</h1>
```

```css
body {
  --mx: 4rem;
}
```

```js
var foo = function (bar) {
  return bar * 2;
};

console.log(foo(5));
```

{% endcodepen %}
````

### Shortcode attributes:

```md
codepen -> The shortcode (1st attr)

"https://unpkg.com/bonsai.css@latest/dist/bonsai.min.css", -> Any ext css (semicolon seperated) (2nd attr)

"https://unpkg.com/uhtml", -> Any ext js (semicolon seperated) (3rd attr)

"Heyyy", -> Title of the pen (4th attr)

"Waz uuuuuuuup", -> Description of the pen (5th attr)

"Test it" -> Button text (for i18n) (6th attr)
```
