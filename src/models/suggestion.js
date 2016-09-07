export class Suggestion {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.numVotes = props.numVotes;
  }
}


export class Prospect {
  constructor(name, description, touch = true) {
    this.name = {
      val: name,
      touched: touch,
      valid: false,
      helpText: `Must be more than ${Prospect.minNameLength} characters long...`,
    };

    this.description = {
      val: description,
      touched: touch,
      valid: false,
      helpText: 'Must be more descriptive than this...',
    };

    this.valid = false;

    this.validate();
  }

  validate() {
    const { name, description } = this;

    if (name.val && name.val.length > Prospect.minNameLength) {
      name.valid = true;
    }

    if (description.val && description.val.length > Prospect.minDescriptionLength) {
      description.valid = true;
    }

    this.valid = (name.valid === true) && (description.valid === true);
  }

  getValidationState(field) {
    if (!this[field]) throw new Error(`Unknown field: ${field}`);

    let state;
    const fieldRef = this[field];

    if (fieldRef.valid === false && fieldRef.touched === true) {
      state = 'error';
    } else if (fieldRef.valid === true) {
      state = 'success';
    }

    return state;
  }
}

Prospect.minNameLength = 3;
Prospect.minDescriptionLength = 10;
