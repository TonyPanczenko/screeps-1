import { ApiAugmenter, instanceMixins, staticMixins } from './src/modules/api-augmenter';

declare global {
  interface Game {
    hasAugmentedApi: boolean;
  }
}

function loop() {
  if (!Game.hasAugmentedApi) {
    new ApiAugmenter(instanceMixins, staticMixins).apply([Game, Creep, Spawn]);
  }
}

export default { loop };
