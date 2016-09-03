import React from 'react';
import { FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';

import api from './../../api';

class AddSuggestion extends React.Component {
  submitSuggestion(event) {
    event.preventDefault();
    const suggestionName = document.getElementById('suggestion-name').value;
    const suggestionDescription = document.getElementById('suggestion-description').value;

    api
    .post('/api/suggestions', {
      name: suggestionName,
      description: suggestionDescription,
    })
    .catch(e => console.log(e));
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
              defaultValue="banan"
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
              defaultValue="oh ohoho oho hh"
            />
          </FormGroup>
          <Button type="submit" bsStyle="primary">Add your suggestion</Button>
        </form>
      </div>
    );
  }
}

export default AddSuggestion;
