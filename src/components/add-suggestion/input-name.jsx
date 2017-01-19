import React from 'react';
import { FormControl, ControlLabel, HelpBlock, FormGroup } from 'react-bootstrap';

export default function InputName(props) {
  return (
    <FormGroup
      validationState={props.validationState}
      controlId="suggestion-name"
      bsSize="large"
    >
      <ControlLabel>Suggestion Name</ControlLabel>
      <FormControl
        id="suggestion-name"
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type="text"
        placeholder="Suggestion name"
      />
      <HelpBlock>{props.helpText}</HelpBlock>
    </FormGroup>
  );
}

InputName.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  value: React.PropTypes.string, // eslint-disable-line
  helpText: React.PropTypes.string, // eslint-disable-line
  validationState: React.PropTypes.string, // eslint-disable-line
};
