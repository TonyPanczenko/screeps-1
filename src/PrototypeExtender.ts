declare global {
  interface Game {
    hasExtendedPrototypes: boolean;
  }
}

export default class PrototypeExtender {
  extensionsArr;

  constructor(extensionsArr) {
    this.extensionsArr = extensionsArr;
  }

  apply(classArr) {
    classArr.forEach((el) => {
      Object.assign(el.prototype, this.extensionsArr[el.prototype.constructor.name.toLowerCase()]);
    });
  }
}
