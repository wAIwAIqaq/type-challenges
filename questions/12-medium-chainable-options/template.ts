type Chainable<T extends Record<string, any> = {}> = {
  option<K extends string, V extends unknown>(
    key: K,
    value: V
  ): Chainable<T & { [k in K]: V }>;
  get(): T;
};
