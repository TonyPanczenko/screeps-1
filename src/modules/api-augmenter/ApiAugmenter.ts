export default class ApiAugmenter {
  instanceMixin: Hash<Mixin>;

  staticMixin: Hash<Mixin>;

  constructor(instanceMixin: Hash<Mixin>, staticMixin: Hash<Mixin>) {
    this.instanceMixin = instanceMixin;
    this.staticMixin = staticMixin;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  apply(constructorArr: (Function | object)[]): void {
    constructorArr.forEach((el) => {
      if (typeof el === 'function') {
        const className = el.name.toLowerCase();
        Object.assign(el.prototype, this.instanceMixin[className]);
        Object.assign(el, this.staticMixin[className]);
      } else {
        console.log(`## ApiAugmenter: ${el} could not be augmented.`);
      }
    });
  }
}
