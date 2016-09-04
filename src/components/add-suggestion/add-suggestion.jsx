import React from 'react';
import { FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';
import actions /* { addSuggestion } */ from '../../actions';

class AddSuggestion extends React.Component {
  constructor(props) {
    super(props);

    this.submitSuggestion = this.submitSuggestion.bind(this);
  }

  submitSuggestion(event) {
    event.preventDefault();
    const name = document.getElementById('suggestion-name').value;
    const description = document.getElementById('suggestion-description').value;

    actions.addSuggestion(name, description);
  }

  render() {
    return (
      <div className="add-suggestion">
        <form method="POST" action="" onSubmit={this.submitSuggestion}>
          <FormGroup>
            <ControlLabel>Suggestion Name</ControlLabel>
            <FormControl
              id="suggestion-name"
              type="text"
              placeholder="Suggestion name"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel htmlFor="suggestion-description">What makes this so great?</ControlLabel>
            <FormControl
              id="suggestion-description"
              componentClass="textarea"
              placeholder="Short description with motivation"
              name="newSuggestionSummary"
              rows="10"
              cols="50"
            />
          </FormGroup>
          <Button type="submit" bsStyle="primary">Add your suggestion</Button>
        </form>
      </div>
    );
  }
}

export default AddSuggestion;
