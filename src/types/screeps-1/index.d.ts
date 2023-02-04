interface Game {
  hasAugmentedApi: boolean;
}

type Mixin = {
  [key: string]: any;
};

type Collection<Type> = {
  [key: string]: Type
};
