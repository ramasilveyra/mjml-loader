import path from 'path';
import del from 'del';
import webpack from 'webpack';

// TODO: For some reason jest in watch mode loops infinitely in this test.
// Needs investigation, skiped by default.
describe.skip('while using mjml-loader with raw-loader', () => {
  beforeEach(() => del(path.resolve(__dirname, 'fixtures/bundle.js')));

  it('should inline MJML result into the bundle', async () => {
    const options = {
      entry: path.resolve(__dirname, 'fixtures/entry.js'),
      output: {
        path: path.resolve(__dirname, 'fixtures'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
      },
      module: {
        rules: [{ test: /\.mjml$/, loader: require.resolve('../') }]
      },
      target: 'node'
    };

    await compile(options);
    const html = (await import('./fixtures/bundle')).default;

    expect(html).toMatchSnapshot();
  });
});

function compile(options) {
  return new Promise((resolve, reject) => {
    const compiler = webpack(options);
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) {
        return reject(err || stats);
      }

      return resolve(stats);
    });
  });
}
