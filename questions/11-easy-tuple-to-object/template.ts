type TupleToObject<T extends readonly (symbol | string | number)[]> = {
  [P in T[number]]: P;
};
const tuple1 = ["tesla", "model 3", "model X", "model Y"] as const;
type TupleToObjectRes = TupleToObject<typeof tuple1>;
