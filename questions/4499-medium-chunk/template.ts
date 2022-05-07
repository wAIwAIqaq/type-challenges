type Chunk<
  T extends unknown[],
  Num extends number,
  ContainerArr extends unknown[] = [],
  ResArr extends unknown[] = []
> = T extends [infer First, ...infer Rest]
  ? ContainerArr["length"] extends Num
    ? Chunk<Rest, Num, [First], [...ResArr, ContainerArr]>
    : Chunk<Rest, Num, [...ContainerArr, First], [...ResArr]>
  : ContainerArr extends []
  ? [...ResArr, ...ContainerArr]
  : [...ResArr, ContainerArr];
type ChunkRes = Chunk<[1, 2, 3], 2>;
