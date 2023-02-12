interface Game {
  hasAugmentedApi: boolean;
}

interface RoomMemory {
  isControlled?: boolean;
}

type Mixin = {
  [key: string]: any;
};

type Hash<ValueType> = {
  [key: string]: ValueType
};
