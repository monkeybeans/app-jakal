import React from 'react';
import { FormControl, ControlLabel, HelpBlock, FormGroup } from 'react-bootstrap';

export default function InputDescription(props) {
  return (
    <FormGroup
      validationState={props.validationState}
      controlId="suggestion-description"
      bsSize="large"
    >
      <ControlLabel htmlFor="suggestion-description">What makes this so great?</ControlLabel>
      <FormControl
        id="suggestion-description"
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        componentClass="textarea"
        placeholder="Short description with motivation"
        name="newSuggestionSummary"
        rows="10"
        cols="50"
      />
      <HelpBlock>{props.helpText}</HelpBlock>
    </FormGroup>
  );
}

InputDescription.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired,
  value: React.PropTypes.string, // eslint-disable-line
  helpText: React.PropTypes.string, // eslint-disable-line
  validationState: React.PropTypes.string, // eslint-disable-line
};
