export default class SuggestionModel {
  constructor(props, touch) {
    this.validate(props, touch);
  }

  validate(props, touch) {
    const validateConfig = o =>
    ['validator', 'value', 'touched', 'valid', 'error'].every(p => o[p] !== undefined);

    Object.keys(props).forEach(k => {
      const propValue = props[k];
      const config = SuggestionModel.CONFIG[k];
      if (config) {
        if (!validateConfig(config)) { throw new Error(`Property '${k}' missing fields!`); }
        const valid = config.validator(propValue);
        this[k] = {
          value: propValue,
          touched: !!touch,
          valid,
          error: valid ? null : config.error,
        };
      } else {
        console.error(`Recieved unknonw prop: ${k}`); // eslint-disable-line no-console
      }
    });
  }
}


SuggestionModel.CONFIG = {
  id: {
    validator: val => typeof val === 'number' && val > 0,
    value: 0,
    touched: false,
    valid: false,
    error: 'Value must be more a positive number',
  },
  name: {
    validator: val => typeof val === 'string' && val.length > 3,
    value: '',
    touched: false,
    valid: false,
    error: 'Name must be more than 3 characters long.',
  },
  description: {
    validator: val => typeof val === 'string' && val.length > 10,
    value: 0,
    touched: false,
    valid: false,
    error: 'Value must be more than 10 characters long.',
  },
  numVotes: {
    validator: val => typeof val === 'number' && val >= 0,
    value: 0,
    touched: false,
    valid: false,
    error: 'Vote must be a number.',
  },
  submitted: {
    validator: val => typeof val === 'string' && val.length > 0,
    value: 0,
    touched: false,
    valid: false,
    error: 'Submitted must be a date.',
  },
  submitter: {
    validator: val => typeof val === 'string' && val > 0,
    value: 0,
    touched: false,
    valid: false,
    error: 'Submitter must have a name.',
  },
};
