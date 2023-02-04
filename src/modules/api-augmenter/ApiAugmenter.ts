export default class ApiAugmenter {
  instanceMixin: Collection<Mixin>;

  staticMixin: Collection<Mixin>;

  constructor(instanceMixin: Collection<Mixin>, staticMixin: Collection<Mixin>) {
    this.instanceMixin = instanceMixin;
    this.staticMixin = staticMixin;
  }

  apply(classArr) {
    classArr.forEach((el) => {
      const className = el.prototype.constructor.name.toLowerCase();
      Object.assign(el.prototype, this.instanceMixin[className]);
      Object.assign(el, this.staticMixin[className]);
    });
  }
}
