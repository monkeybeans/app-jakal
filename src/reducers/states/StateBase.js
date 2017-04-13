class StateBase {
  constructor(props = {}, inheritance = {}, template = []) {
    if (!(inheritance instanceof StateBase) && JSON.stringify(inheritance) !== '{}') { throw new Error('inheritance is not of type StateBase'); }

    const filterObject = filter => o => Object.keys(o).reduce((acc, prop) => {
      if (filter.indexOf(prop) !== -1) {
        acc[prop] = o[prop];
      } else {
        console.error(`Recieved unkonwn prop: ${prop}`); // eslint-disable-line no-console
      }

      return acc;
    }, {});

    const inheritObject = from => to => Object.assign(to, from);

    const filteredProps = filterObject(template)(props);
    Object.keys(filteredProps).forEach((p) => {
      this[p] = filteredProps[p];
    });

    inheritObject(inheritance)(this);
  }

}

export default StateBase;
