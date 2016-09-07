import React from 'react';
import { connect } from 'react-redux';
import { FormControl, ControlLabel, HelpBlock, FormGroup, Button } from 'react-bootstrap';
import { addSuggestion, updateProspect } from '../../actions';

class AddSuggestion extends React.Component {
  constructor(props) {
    super(props);

    this.sendProspect = this.sendProspect.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    const name = document.getElementById('suggestion-name').value;
    const description = document.getElementById('suggestion-description').value;

    updateProspect(name, description, false);
  }

  sendProspect(event) {
    event.preventDefault();
    const name = document.getElementById('suggestion-name').value;
    const description = document.getElementById('suggestion-description').value;
    const { suggestion: { prospect } } = this.props;

    updateProspect(name, description, true);

    if (prospect.valid === true) {
      addSuggestion(prospect);
    }
  }


  render() {
    if (this.props.status.period !== 'SUGGEST') return null;

    const { suggestion: { prospect } } = this.props;

    return (
      <div className="add-suggestion">
        <form method="POST" action="" onSubmit={this.sendProspect}>
          <FormGroup
            validationState={prospect.getValidationState('name')}
            controlId="suggestion-name"
          >
            <ControlLabel>Suggestion Name</ControlLabel>
            <FormControl
              id="suggestion-name"
              value={prospect.name.val}
              onChange={this.onChange}
              type="text"
              placeholder="Suggestion name"
            />
            <HelpBlock>{prospect.name.touched && prospect.name.helpText}</HelpBlock>
          </FormGroup>
          <FormGroup
            validationState={prospect.getValidationState('description')}
            controlId="suggestion-description"
          >
            <ControlLabel htmlFor="suggestion-description">What makes this so great?</ControlLabel>
            <FormControl
              id="suggestion-description"
              value={prospect.description.val}
              onChange={this.onChange}
              componentClass="textarea"
              placeholder="Short description with motivation"
              name="newSuggestionSummary"
              rows="10"
              cols="50"
            />
            <HelpBlock>{prospect.description.touched && prospect.description.helpText}</HelpBlock>
          </FormGroup>
          <Button
            type="submit"
            bsStyle="primary"
            disabled={!prospect.name.valid || !prospect.description.valid}
          >Add your suggestion</Button>
        </form>
      </div>
    );
  }
}

AddSuggestion.propTypes = {
  suggestion: React.PropTypes.object,
  status: React.PropTypes.object,
};

const mapStateToProps = state => ({
  suggestion: state.suggestion,
  status: state.status,
});

export default connect(mapStateToProps)(AddSuggestion);
