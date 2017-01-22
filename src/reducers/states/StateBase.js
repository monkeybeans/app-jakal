class StateBase {
  constructor(props = {}, inheritance = {}, template) {
    Object.assign(this, inheritance);

    Object.keys(template).forEach((tk) => {
      const templateMapper = template[tk];
      const propKey = typeof templateMapper === 'function' ? templateMapper.name : templateMapper;

      if (!propKey) { throw new Error(`Unknown state prop: ${propKey}`); }

      const propValue = props[propKey];
      const mappedValue = typeof templateMapper === 'function' ? templateMapper(propValue) : propValue;

      this[tk] = mappedValue !== undefined ? mappedValue : this[tk];
    });
  }

}

export default StateBase;
