const mjml = require('mjml');

module.exports = content => {
  this.cacheable && this.cacheable();
  this.value = content;
  return `module.exports = ${JSON.stringify(mjml.mjml2html(content))};`;
};
