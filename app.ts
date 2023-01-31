/// <reference types="screeps" />

import PrototypeExtender from './src/PrototypeExtender';
import extensions from './src/extensions';

function loop() {
  if (!Game.hasExtendedPrototypes) {
    new PrototypeExtender(extensions).apply([Game, Creep, Spawn]);
  }
}

export default { loop };
