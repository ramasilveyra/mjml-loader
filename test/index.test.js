import fs from 'fs';
import path from 'path';
import mjmlLoader from '../src';

const validMJMLPath = path.resolve(__dirname, 'fixtures/valid.mjml');
const validMJML = fs.readFileSync(validMJMLPath, 'utf-8');
const invalidMJMLPath = path.resolve(__dirname, 'fixtures/invalid.mjml');
const invalidMJML = fs.readFileSync(invalidMJMLPath, 'utf-8');

describe('while using mjml-loader', () => {
  it('should convert valid MJML to CommonJS module exporting the HTML result', () => {
    const context = {
      cacheable: jest.fn()
    };

    const result = mjmlLoader.call(context, validMJML);

    expect(result).toMatchSnapshot();
    expect(context.cacheable).toHaveBeenCalled();
  });

  it('should throw with invalid MJML', () => {
    const context = {
      cacheable: jest.fn(),
      resourcePath: invalidMJMLPath
    };

    const result = mjmlLoader.bind(context, invalidMJML);

    expect(result).toThrowError(/\[mjml-loader\] ERROR in /);
    expect(context.cacheable).toHaveBeenCalled();
  });
});
