<br />
<div align="center">
  <a href="https://www.npmjs.com/package/mjml-loader">
    <img src="https://img.shields.io/npm/v/mjml-loader.svg?maxAge=86400" alt="Last npm Registry Version">
  </a>
  <a href="https://travis-ci.org/ramasilveyra/mjml-loader?branch=master">
    <img src="https://travis-ci.org/ramasilveyra/mjml-loader.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://codecov.io/github/ramasilveyra/mjml-loader?branch=master">
    <img src="https://img.shields.io/codecov/c/github/ramasilveyra/mjml-loader.svg?branch=master" alt="Code coverage">
  </a>
</div>

<h1 align="center">MJML loader for webpack</h1>

<p align="center">Converts MJML files to HTML and exports them as string.</p>

<h2 align="center">Table of Contents</h2>

- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)
- [Contribute](#contribute)
- [License](#license)

<h2 align="center">Install</h2>

**Node.js v6.5 or newer** is required.

**webpack 2 or newer** is required.

Via the yarn client:

```bash
$ yarn add --dev mjml-loader webpack
```

Via the npm client:

```bash
$ npm install --save-dev mjml-loader webpack
```

<h2 align="center">Usage</h2>


[Look into the official webpack loaders usage documentation](https://webpack.js.org/concepts/loaders/#using-loaders).

At this moment this loader has no options.

<h2 align="center">Examples</h2>

### Compile MJML file to HTML file

For transforming a MJML file to a HTML file is better to use [`mjml cli`](https://www.npmjs.com/package/mjml-cli) or [`gulp-mjml`](https://www.npmjs.com/package/gulp-mjml).

### Inline the MJML result (HTML) into bundle

With this configuration:

```javascript
{
  // ...
  module: {
    rules: [
      { test: /\.mjml$/, loader: 'mjml-loader' }
    ]
  }
  // ...
}
```

With this MJML file:

`template.mjml`
```xml
 <mjml>
  <mj-body>
    <mj-container>
      <mj-section>
        <mj-column>
          <mj-text>Hello World!</mj-text>
        </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>
```

This entry point:

`index.js`
```javascript
import template from './template.mjml';
console.log(template);
```

The console output will be:

```html
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<style type="text/css">
  #outlook a { padding: 0; }
  .ReadMsgBody { width: 100%; }
  .ExternalClass { width: 100%; }
  .ExternalClass * { line-height:100%; }
  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
  p { display: block; margin: 13px 0; }
</style>
<!--[if !mso]><!-->
<style type="text/css">
  @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
</style>
<style type="text/css">
  @media only screen and (max-width:480px) {
    @-ms-viewport { width:320px; }
    @viewport { width:320px; }
  }
</style>
<link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
<!--<![endif]-->
<style type="text/css">
  @media only screen and (min-width:480px) {
    .mj-column-per-100, * [aria-labelledby="mj-column-per-100"] { width:100%!important; }
  }
</style>
</head>
<body>
  <div><!--[if mso]>
      <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"><tr><td>
      <![endif]--><div style="margin:0 auto;max-width:600px;"><table cellpadding="0" cellspacing="0" style="font-size:0;width:100%;" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;font-size:0;padding:20px 0;"><!--[if mso]>
      <table border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
      <![endif]--><div aria-labelledby="mj-column-per-100" class="mj-column-per-100" style="vertical-align:top;display:inline-block;font-size:13px;text-align:left;width:100%;"><table cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-break:break-word;font-size:0;padding:10px 25px;" align="left"><div style="cursor:auto;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;">Hello World!</div></td></tr></tbody></table></div><!--[if mso]>
      </td></tr></table>
      <![endif]--></td></tr></tbody></table></div><!--[if mso]>
      </td></tr></table>
      <![endif]-->
      <!--[if mso]>
      <table border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;"><tr><td>
      <![endif]--><div></div><!--[if mso]>
      </td></tr></table>
      <![endif]--></div>
</body>
</html>
```

<h2 align="center">Contribute</h2>

Feel free to dive in! [Open an issue](https://github.com/ramasilveyra/mjml-loader/issues/new) or submit PRs.

mjml-loader follows the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) Code of Conduct.

<h2 align="center">License</h2>

[MIT © Ramiro Silveyra d'Avila](LICENSE.md)
