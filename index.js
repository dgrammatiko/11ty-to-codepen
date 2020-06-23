module.exports = (content, css, js, title, description, buttonText) => {
  const data = {
    title: title || this.fileSlug,
    description: description || `${this.fileSlug} Example`,
    editors: "111",
    layout: "left",
    css_external: css,
    js_external: js,
    js_module: true,
    // html_pre_processor: "none", // || "slim" || "haml" || "markdown",
    // css_pre_processor: "none", // || "less" || "scss" || "sass" || "stylus",
    // css_starter: "neither", //"normalize" || "reset" ||
    // css_prefix: "neither", //"autoprefixer" || "prefixfree" ||
    // js_pre_processor: "none", // || "coffeescript" || "babel" || "livescript" || "typescript",
    // html_classes: "",
  };

  const htmlContent = content.match(/```html([^`]*)```/);
  if (htmlContent && htmlContent.length) {
    data.html = htmlContent[1];
  }

  const cssContent = content.match(/```css([^`]*)```/);
  if (cssContent && cssContent.length) {
    data.css = cssContent[1];
  }

  const jsContent = content.match(/```js([\s\S]*?)```/);
  if (jsContent && jsContent.length) {
    data.js = jsContent[1];
  }

  const JSONstring = JSON.stringify(data);
  const form = `
<form action="https://codepen.io/pen/define" method="POST" target="_blank">
<input type="hidden" name="data" value='${JSONstring}'>
<button type="submit">${buttonText || "Create New Pen"}</button>
</form>
`;

  return `${content}${form}`;
};
