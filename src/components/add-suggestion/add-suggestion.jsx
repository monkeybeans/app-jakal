import React from 'react';

import api from './../../api';

class AddSuggestion extends React.Component {
  submitSuggestion(event) {
    event.preventDefault();
    const suggestionName = document.getElementById('suggestion-name').value;
    const suggestionDescription = document.getElementById('suggestion-description').value;

    api.post('/api/suggestions', {
      name: suggestionName,
      description: suggestionDescription,
    });
  }

  render() {
    return (
      <div className="add-suggestion">
        <form method="POST" action="" onSubmit={this.submitSuggestion}>
          <label htmlFor="suggestion-name">Suggestion Name</label>
          <input id="suggestion-name" value="banan" />
          <label htmlFor="suggestion-description">What makes this so great?</label>
          <textarea id="suggestion-description" name="newSuggestionSummary" rows="10" cols="50" value="oh ohoho oho hh" />
          <input type="submit" value="Add your suggestion" />
        </form>
      </div>
    );
  }
}

export default AddSuggestion;
