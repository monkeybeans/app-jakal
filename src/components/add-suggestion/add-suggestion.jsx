import React from 'react';


class AddSuggestion extends React.Component {
  submitSuggestion(event) {
    event.preventDefault();

    console.log('Submitted...');
  }

  render() {
    return (
      <div className="add-suggestion">
        <form method="POST" action="" onSubmit={this.submitSuggestion}>
          <label htmlFor="add-suggestion__name">Suggestion Name</label>
          <input id="add-suggestion__name" />
          <label htmlFor="add-suggestion__description">What makes this so great?</label>
          <input id="add-suggestion__description" />
          <input type="submit" value="Add your suggestion" />
        </form>
      </div>
    );
  }
}

export default AddSuggestion;
