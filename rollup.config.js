import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts', // 入口文件
    output: [
      {
        file: 'dist/index.cjs.js', // CommonJS 输出
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js', // ES Module 输出
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(), // 解析 Node.js 模块
      commonjs(), // 兼容 CommonJS
      typescript(), // TypeScript 支持
    ],
  },
];
