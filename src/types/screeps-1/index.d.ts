interface Game {
  hasAugmentedApi: boolean;
}

type Mixin = {
  [key: string]: any;
};

type Collection<Type> = {
  [key: string]: Type
};

declare const MAX_NUM_OF_CONTAINERS: {
  [rcl: number]: number;
  0: 5;
  1: 5;
  2: 5;
  3: 5;
  4: 5;
  5: 5;
  6: 5;
  7: 5;
  8: 5;
};

declare const MAX_NUM_OF_SPAWNS: {
  [rcl: number]: number;
  1: 1;
  2: 1;
  3: 1;
  4: 1;
  5: 1;
  6: 1;
  7: 2;
  8: 3;
};

declare const MAX_NUM_OF_EXTENSIONS: {
  [rcl: number]: number;
  2: 5;
  3: 10;
  4: 20;
  5: 30;
  6: 40;
  7: 50;
  8: 60;
};

declare const MAX_NUM_OF_TOWERS: {
  [rcl: number]: number;
  3: 1;
  4: 1;
  5: 2;
  6: 2;
  7: 3;
  8: 6;
};

declare const MAX_NUM_OF_STORAGES: {
  [rcl: number]: number;
  4: 1;
  5: 1;
  6: 1;
  7: 1;
  8: 1;
};

declare const MAX_NUM_OF_LINKS: {
  [rcl: number]: number;
  5: 2;
  6: 3;
  7: 4;
  8: 6;
};

declare const MAX_NUM_OF_EXTRACTORS: {
  [rcl: number]: number;
  6: 1;
  7: 1;
  8: 1;
};

declare const MAX_NUM_OF_LABS: {
  [rcl: number]: number;
  6: 3;
  7: 6;
  8: 10;
};

declare const MAX_NUM_OF_TERMINALS: {
  [rcl: number]: number;
  6: 1;
  7: 1;
  8: 1;
};

declare const MAX_NUM_OF_FACTORIES: {
  [rcl: number]: number;
  7: 1;
  8: 1;
};

declare const MAX_NUM_OF_OBSERVERS: {
  [rcl: number]: number;
  8: 1;
};

declare const MAX_NUM_OF_POWERSPAWNS: {
  [rcl: number]: number;
  8: 1;
};

declare const MAX_NUM_OF_NUKERS: {
  [rcl: number]: number;
  8: 1;
};
