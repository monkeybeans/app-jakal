import React from 'react';
import { FormControl, ControlLabel, HelpBlock, FormGroup, Button } from 'react-bootstrap';
import action, { addSuggestion } from '../../actions';
import { SubmitSuggestion } from '../../models/suggestion';

class AddSuggestion extends React.Component {
  constructor(props) {
    super(props);

    if (addSuggestion) throw new Error('export works!!!!');

    this.state = { suggestion: new SubmitSuggestion('', '', false) };

    this.submitSuggestion = this.submitSuggestion.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    const name = document.getElementById('suggestion-name').value;
    const description = document.getElementById('suggestion-description').value;

    const subSug = new SubmitSuggestion(name, description, false);

    this.setState({ suggestion: subSug });
  }

  submitSuggestion(event) {
    event.preventDefault();
    const nameEl = document.getElementById('suggestion-name');
    const descriptionEl = document.getElementById('suggestion-description');

    const name = nameEl.value;
    const description = descriptionEl.value;

    const subSug = new SubmitSuggestion(name, description, true);

    if (subSug.valid === true) {
      action.addSuggestion(name, description);
      this.setState({ suggestion: new SubmitSuggestion('', '', false) });
    } else {
      this.setState({ suggestion: subSug });
    }
  }


  render() {
    const { suggestion } = this.state;
    return (
      <div className="add-suggestion">
        <form method="POST" action="" onSubmit={this.submitSuggestion}>
          <FormGroup
            validationState={suggestion.getValidationState('name')}
            controlId="suggestion-name"
          >
            <ControlLabel>Suggestion Name</ControlLabel>
            <FormControl
              id="suggestion-name"
              value={suggestion.name.val}
              onChange={this.onChange}
              type="text"
              placeholder="Suggestion name"
            />
            <HelpBlock>{suggestion.name.touched && suggestion.name.helpText}</HelpBlock>
          </FormGroup>
          <FormGroup
            validationState={suggestion.getValidationState('description')}
            controlId="suggestion-description"
          >
            <ControlLabel htmlFor="suggestion-description">What makes this so great?</ControlLabel>
            <FormControl
              id="suggestion-description"
              value={suggestion.description.val}
              onChange={this.onChange}
              componentClass="textarea"
              placeholder="Short description with motivation"
              name="newSuggestionSummary"
              rows="10"
              cols="50"
            />
            <HelpBlock>{suggestion.description.touched && suggestion.description.helpText}</HelpBlock>
          </FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={!suggestion.name.valid || !suggestion.description.valid}
          >Add your suggestion</Button>
        </form>
      </div>
    );
  }
}

export default AddSuggestion;
