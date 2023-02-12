export default class ApiAugmenter {
  instanceMixins: Hash<Mixin>;

  staticMixins: Hash<Mixin>;

  constructor(instanceMixins: Hash<Mixin>, staticMixins: Hash<Mixin>) {
    this.instanceMixins = instanceMixins;
    this.staticMixins = staticMixins;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  apply(constructorArr: (Function | object)[]): void {
    constructorArr.forEach((el) => {
      if (typeof el === 'function') {
        const className: string = el.name.toLowerCase();
        const instanceMixin: Mixin = this.instanceMixins[className] || {};
        Object.assign(el.prototype, instanceMixin);
        const staticMixin: Mixin = this.staticMixins[className] || {};
        Object.assign(el, staticMixin);
      } else {
        console.log(`## ApiAugmenter: ${el} could not be augmented.`);
      }
    });
  }
}
