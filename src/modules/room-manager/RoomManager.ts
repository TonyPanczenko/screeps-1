import { MAX_NUM_OF_STRUCTURES } from '@src/rules-constants';
import { ConstructionPlanner } from './modules';

export default class RoomManager {
  #roomName: string;

  #room: Room | null;

  #isVisible: boolean;

  #ConstructionPlanner: ConstructionPlanner | null = null;

  constructor(roomName: string) {
    this.#roomName = roomName;
    const room = Game.rooms[this.#roomName];
    if (room) {
      this.#isVisible = true;
      this.#room = room;
    } else {
      this.#isVisible = false;
      this.#room = null;
    }
  }

  isRoomControlled(): boolean {
    return this.#isVisible && !!this.#room?.controller?.my;
  }

  planNewConstruction(newStructType: BuildableStructureConstant) {
    if (!this.isRoomControlled()) return;

    const roomControllerLevel: number = this.#room!.controller!.level;
    const maxNumOfStruct: number = MAX_NUM_OF_STRUCTURES[newStructType]?.[roomControllerLevel] || 0;
    const structCount = this.#room!.find(FIND_STRUCTURES, {
      filter: (struct) => struct.structureType === newStructType,
    }).length;
    const newStructCount = maxNumOfStruct - structCount;

    if (newStructCount <= 0) return;

    if (!this.#ConstructionPlanner) this.#ConstructionPlanner = new ConstructionPlanner();
  }
}
