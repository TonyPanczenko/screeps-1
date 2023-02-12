/* eslint-disable @typescript-eslint/naming-convention */

export const MAX_NUM_OF_CONTAINERS: Hash<number, number> = {
  0: 5,
  1: 5,
  2: 5,
  3: 5,
  4: 5,
  5: 5,
  6: 5,
  7: 5,
  8: 5,
};

export const MAX_NUM_OF_SPAWNS: Hash<number, number> = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 2,
  8: 3,
};

export const MAX_NUM_OF_EXTENSIONS: Hash<number, number> = {
  2: 5,
  3: 10,
  4: 20,
  5: 30,
  6: 40,
  7: 50,
  8: 60,
};

export const MAX_NUM_OF_TOWERS: Hash<number, number> = {
  3: 1,
  4: 1,
  5: 2,
  6: 2,
  7: 3,
  8: 6,
};

export const MAX_NUM_OF_STORAGES: Hash<number, number> = {
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
};

export const MAX_NUM_OF_LINKS: Hash<number, number> = {
  5: 2,
  6: 3,
  7: 4,
  8: 6,
};

export const MAX_NUM_OF_EXTRACTORS: Hash<number, number> = {
  6: 1,
  7: 1,
  8: 1,
};

export const MAX_NUM_OF_LABS: Hash<number, number> = {
  6: 3,
  7: 6,
  8: 10,
};

export const MAX_NUM_OF_TERMINALS: Hash<number, number> = {
  6: 1,
  7: 1,
  8: 1,
};

export const MAX_NUM_OF_FACTORIES: Hash<number, number> = {
  7: 1,
  8: 1,
};

export const MAX_NUM_OF_OBSERVERS: Hash<number, number> = {
  8: 1,
};

export const MAX_NUM_OF_POWER_SPAWNS: Hash<number, number> = {
  8: 1,
};

export const MAX_NUM_OF_NUKERS: Hash<number, number> = {
  8: 1,
};

export const MAX_NUM_OF_STRUCTURES:
Hash<BuildableStructureConstant, Hash<number, number>> = {
  [STRUCTURE_CONTAINER]: MAX_NUM_OF_CONTAINERS,
  [STRUCTURE_SPAWN]: MAX_NUM_OF_SPAWNS,
  [STRUCTURE_EXTENSION]: MAX_NUM_OF_EXTENSIONS,
  [STRUCTURE_TOWER]: MAX_NUM_OF_TOWERS,
  [STRUCTURE_STORAGE]: MAX_NUM_OF_STORAGES,
  [STRUCTURE_LINK]: MAX_NUM_OF_LINKS,
  [STRUCTURE_EXTRACTOR]: MAX_NUM_OF_EXTRACTORS,
  [STRUCTURE_LAB]: MAX_NUM_OF_LABS,
  [STRUCTURE_TERMINAL]: MAX_NUM_OF_TERMINALS,
  [STRUCTURE_FACTORY]: MAX_NUM_OF_FACTORIES,
  [STRUCTURE_OBSERVER]: MAX_NUM_OF_OBSERVERS,
  [STRUCTURE_NUKER]: MAX_NUM_OF_NUKERS,
};
