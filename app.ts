/// <reference types="screeps" />

import ApiAugmenter from './src/ApiAugmenter';
import { instanceMixin, staticMixin } from './src/mixins';

declare global {
  interface Game {
    hasAugmentedApi: boolean;
  }
}

function loop() {
  if (!Game.hasAugmentedApi) {
    new ApiAugmenter(instanceMixin, staticMixin).apply([Game, Creep, Spawn]);
  }
}

export default { loop };
