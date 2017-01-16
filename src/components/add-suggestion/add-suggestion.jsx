import React from 'react';
import { connect } from 'react-redux';
import { FormControl, ControlLabel, HelpBlock, FormGroup, Button } from 'react-bootstrap';
import { addSuggestion, updateProspect } from '../../actions';
import './add-suggestion.scss';

class AddSuggestion extends React.Component {
  static onChange(event) {
    event.preventDefault();
    const name = document.getElementById('suggestion-name').value;
    const description = document.getElementById('suggestion-description').value;

    updateProspect(name, description, false);
  }

  static sendProspect(event) {
    event.preventDefault();
    const name = document.getElementById('suggestion-name').value;
    const description = document.getElementById('suggestion-description').value;

    if ('IMPLEMENT_THIS' === true) {
      addSuggestion({ name, description });
    }
  }

  render() {
    if (this.props.config.period !== 'SUGGEST') return null;

    return (
      <div className="add-suggestion">
        <form method="POST" action="" onSubmit={this.sendProspect}>
          <FormGroup
            validationState={'IMPLEMENT_THIS'}
            controlId="suggestion-name"
            bsSize="large"
          >
            <ControlLabel>Suggestion Name</ControlLabel>
            <FormControl
              id="suggestion-name"
              value={'IMPLEMENT_THIS'}
              onChange={this.onChange}
              type="text"
              placeholder="Suggestion name"
            />
            <HelpBlock>{'IMPLEMENT_THIS'}</HelpBlock>
          </FormGroup>
          <FormGroup
            validationState={'IMPLEMENT_THIS'}
            controlId="suggestion-description"
            bsSize="large"
          >
            <ControlLabel htmlFor="suggestion-description">What makes this so great?</ControlLabel>
            <FormControl
              id="suggestion-description"
              value={'IMPLEMENT_THIS'}
              onChange={this.onChange}
              componentClass="textarea"
              placeholder="Short description with motivation"
              name="newSuggestionSummary"
              rows="10"
              cols="50"
            />
            <HelpBlock>{'IMPLEMENT_THIS'}</HelpBlock>
          </FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={'IMPLEMENT_THIS'}
            bsSize="large"
          >Add your suggestion</Button>
        </form>
      </div>
    );
  }
}

AddSuggestion.propTypes = {
  config: React.PropTypes.object, //eslint-disable-line
};

const mapStateToProps = state => ({
  config: state.config,
});

export default connect(mapStateToProps)(AddSuggestion);
