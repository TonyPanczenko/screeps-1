import { MAX_NUM_OF_STRUCTURES } from '@src/rules-constants';

export default class RoomManager {
  roomName: string;

  room: Room | null;

  isVisible: boolean;

  constructor(roomName: string) {
    this.roomName = roomName;
    const room = Game.rooms[roomName];
    if (room) {
      this.isVisible = true;
      this.room = room;
    } else {
      this.isVisible = false;
      this.room = null;
    }
  }

  isRoomControlled(): boolean {
    return this.isVisible && !!this.room?.controller?.my;
  }

  planNewConstruction(structType: keyof typeof MAX_NUM_OF_STRUCTURES) {
    if (!this.isRoomControlled()) return;
    const roomControllerLevel: number = this.room!.controller!.level;
    const maxNumOfStruct: number = MAX_NUM_OF_STRUCTURES[structType][roomControllerLevel] || 0;
    const structCount = this.room!.find(FIND_STRUCTURES, {
      filter: (struct) => struct.structureType === structType,
    }).length;

    if (structCount < maxNumOfStruct) {

    }
  }
}
