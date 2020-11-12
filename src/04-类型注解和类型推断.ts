// type annotation 类型注解
// type inference 类型推断
// 工作使用问题（潜规则）:
// 1.如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 2.如果 TS 无法分析变量类型的话， 我们就需要使用类型注解

// getTotal中的参数 one和two是无法推断出来的所以需要注解
function getTotal(one: number, two: number) {
  return one + two;
}
// total的值是可以推断出来的 所以不需要注解
const total = getTotal(1, 2);
