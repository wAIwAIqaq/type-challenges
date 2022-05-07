type FlattenDepth<T extends unknown[], Depth extends number = 1> = T extends [
  infer First,
  ...infer Rest
]
  ? [FlattenItemByDepth<First, Depth>, FlattenDepth<Rest, Depth>]
  : T;
type FlattenItemByDepth<
  T,
  Depth extends number,
  DepthArr extends unknown[] = []
> =
  // 判断是否已经结构响应次数
  DepthArr["length"] extends Depth
    ? // 判断是不是一个数组
      T extends unknown[]
      ? T extends [infer First, ...infer Rest]
        ? // 判断第一个是不是一个数组
          First extends unknown[]
          ? [...First, FlattenItemByDepth<Rest, Depth, [...DepthArr, unknown]>]
          : [First, FlattenItemByDepth<Rest, Depth, [...DepthArr, unknown]>]
        : T
      : T
    : T;
type FlattenItemByDepthRes = FlattenItemByDepth<[[1], 2], 1>;
// type FlattenDepthRes = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>;
