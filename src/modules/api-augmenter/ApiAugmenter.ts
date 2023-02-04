export default class ApiAugmenter {
  instanceMixin: Collection<Mixin>;

  staticMixin: Collection<Mixin>;

  constructor(instanceMixin: Collection<Mixin>, staticMixin: Collection<Mixin>) {
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
      }
    });
  }
}
