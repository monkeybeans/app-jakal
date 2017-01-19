export default class SuggestionModel {
  constructor(props = {}, touch = false, inheritance) {
    const validPropKeys = Object.keys(SuggestionModel.CONFIG);
    const invalidPropKeys = Object.keys(props).filter(k => validPropKeys.indexOf(k) === -1);
    if (invalidPropKeys.length > 0) { throw new Error(`Invalid properties: ${invalidPropKeys.join(',')}`); }

    this.setDafaultValues();
    this.inheritFromInstance(inheritance);
    this.addProps(props);
    this.touchNew(touch, props);
    this.validate(touch);
  }

  touchNew(touch, props) {
    Object.keys(props).forEach((k) => {
      this[k].touched = touch;
    });
  }

  setDafaultValues() {
    Object.keys(SuggestionModel.CONFIG).forEach((k) => {
      this[k] = {};
      this[k].value = SuggestionModel.CONFIG[k].defaultValue;
      this[k].touched = SuggestionModel.CONFIG[k].touched;
    });
  }

  inheritFromInstance(instance) {
    if (instance) {
      if (!(instance instanceof SuggestionModel)) { throw new Error('Tried to inherit from other instance than SuggestionModel!'); }

      Object.assign(this, instance);
    }
  }

  inValidProps() {
    return Object.keys(this).filter(k => !k.valid);
  }

  isValid() {
    return Object.keys(this).every(k => k.valid);
  }

  touchAll() {
    Object.keys(this).forEach((k) => { this[k].touched = true; });
  }

  mapForApi() {
    return ['name', 'description']
    .reduce((a, c) => Object.assign({}, a, { [c]: this[c].value }), {});
  }

  addProps(props) {
    const unknowns = Object.keys(props).filter(p => !SuggestionModel.CONFIG[p]);
    if (unknowns.length > 0) { throw new Error(`Unkonwn props: ${unknowns.join(',')}`); }

    Object.keys(SuggestionModel.CONFIG).forEach((k) => {
      if (props[k] !== undefined) {
        this[k].value = props[k];
      }
    });
  }

  validate() {
    Object.keys(SuggestionModel.CONFIG).forEach((k) => {
      const config = SuggestionModel.CONFIG[k];
      const value = this[k].value;
      const valid = config.validator(value);

      this[k].valie = valid;
      this[k].error = valid ? '' : config.error;
    });
  }
}


SuggestionModel.CONFIG = {
  id: {
    validator: val => typeof val === 'number' && val > 0,
    defaultValue: 0,
    touched: false,
    valid: false,
    error: 'Value must be more a positive number',
  },
  name: {
    validator: val => typeof val === 'string' && val.length > 3,
    defaultValue: '',
    touched: false,
    valid: false,
    error: 'Name must be more than 3 characters long.',
  },
  description: {
    validator: val => typeof val === 'string' && val.length > 10,
    defaultValue: '',
    touched: false,
    valid: false,
    error: 'Value must be more than 10 characters long.',
  },
  numVotes: {
    validator: val => typeof val === 'number' && val >= 0,
    defaultValue: 0,
    touched: false,
    valid: false,
    error: 'Vote must be a number.',
  },
  submitted: {
    validator: val => typeof val === 'string' && val.length > 0,
    defaultValue: 0,
    touched: false,
    valid: false,
    error: 'Submitted must be a date.',
  },
  submitter: {
    validator: val => typeof val === 'string' && val > 0,
    defaultValue: 0,
    touched: false,
    valid: false,
    error: 'Submitter must have a name.',
  },
};

const validateConfiguration = o =>
['validator', 'defaultValue', 'touched', 'valid', 'error'].every(p => o[p] !== undefined);

Object.keys(SuggestionModel.CONFIG).forEach((k) => {
  const config = SuggestionModel.CONFIG[k];
  if (!validateConfiguration(config)) { throw new Error(`Property '${k}' is missing fields!`); }
});
