import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import string from 'rollup-plugin-string';
import { terser } from 'rollup-plugin-terser';
import deepmerge from 'deepmerge';

const base_config = {
  input: './src/parseCm7.js',
  plugins: [
    resolve(),
    commonjs(),
    string({
      include: '**/*.ebnf',
    }),
  ],
  output: {
    name: 'parseCm7',
    format: 'umd',
  },
};

const config = [
  deepmerge(base_config, {
    output: {
      file: 'dist/parseCm7.umd.js',
    },
  }),
  deepmerge(base_config, {
    plugins: [
      terser(),
    ],
    output: {
      file: 'dist/parseCm7.umd.min.js',
    },
  }),
];

export default config;
