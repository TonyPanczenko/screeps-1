interface Game {
  hasAugmentedApi: boolean;
}

interface RoomMemory {
  isControlled?: boolean;
}

type Mixin = {
  [key: string]: any;
};

type Hash<KeyType, ValueType> = {
  [key: KeyType]: ValueType
};
