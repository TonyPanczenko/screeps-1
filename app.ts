import { ApiAugmenter, instanceMixins, staticMixins } from './src/modules/api-augmenter';

function loop() {
  if (!Game.hasAugmentedApi) {
    new ApiAugmenter(instanceMixins, staticMixins).apply([Game, Creep, Spawn]);
  }
}

export default { loop };
