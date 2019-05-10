import mjml2html from 'mjml';

export default function mjmlLoader(content) {
  this.cacheable();

  const result = mjml2html(content);

  if (result.errors.length) {
    const errorMsg = `[mjml-loader] ERROR in ${this.resourcePath}:
    ${result.errors.map(error => `- ${error.formattedMessage}`)}`;

    const error = new Error(errorMsg);
    error.code = 'MJML_INVALID';

    throw error;
  }

  return `export default ${JSON.stringify(result.html)};`;
}
