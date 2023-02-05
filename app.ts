/* eslint-disable import/prefer-default-export */
import { ApiAugmenter, instanceMixins, staticMixins } from './src/modules/api-augmenter';

export function loop() {
  if (!Game.hasAugmentedApi) {
    new ApiAugmenter(instanceMixins, staticMixins).apply([Game, Creep, Spawn]);
  }
}
