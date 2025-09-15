// 加法函数（带类型注解）
export const add = (a: number, b: number): number => a + b;

// 乘法函数（带类型注解）
export const multiply = (a: number, b: number): number => a * b;

// 格式化数字（带默认参数）
export const formatNumber = (num: number, precision: number = 2): string => {
  return num.toFixed(precision);
};

// 未被使用的函数（会被Tree-shaking移除）
export const unusedFunction = (): string => {
  return "这段代码不会出现在最终打包结果中";
};
