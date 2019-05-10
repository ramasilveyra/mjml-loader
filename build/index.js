'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mjmlLoader;

var _mjml = require('mjml');

var _mjml2 = _interopRequireDefault(_mjml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mjmlLoader(content) {
  this.cacheable();

  const result = (0, _mjml2.default)(content);

  if (result.errors.length) {
    const errorMsg = `[mjml-loader] ERROR in ${this.resourcePath}:
    ${result.errors.map(error => `- ${error.formattedMessage}`)}`;

    const error = new Error(errorMsg);
    error.code = 'MJML_INVALID';

    throw error;
  }

  return `export default ${JSON.stringify(result.html)};`;
}
//# sourceMappingURL=index.js.map