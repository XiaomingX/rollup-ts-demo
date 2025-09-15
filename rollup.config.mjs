import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  // 入口文件
  input: 'src/index.ts',
  
  // 外部依赖（不打包到结果中）
  external: [],
  
  // 插件配置
  plugins: [
    // 解析第三方模块
    resolve(),
    // 转换CommonJS模块为ES模块
    commonjs(),
    // TypeScript编译配置
    typescript({
      tsconfig: './tsconfig.json', // 指定TS配置文件
      declaration: true,           // 生成.d.ts类型声明文件
      declarationDir: 'dist/types' // 类型声明文件输出目录
    })
  ],
  
  // 输出配置（支持多格式输出）
  output: [
    {
      // ES模块格式（适合现代浏览器和ES模块环境）
      file: 'dist/bundle.esm.js',
      format: 'es',
      sourcemap: true // 生成sourcemap，方便调试
    },
    {
      // CommonJS格式（适合Node.js环境）
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      // UMD格式（通用模块定义，支持浏览器全局变量和AMD）
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'MathUtils', // 全局变量名
      sourcemap: true
    }
  ]
};
