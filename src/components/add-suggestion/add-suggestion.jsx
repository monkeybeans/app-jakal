import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { submitSuggestion } from '../../actions';
import { SuggestionModel, PeriodEnum } from '../../models';
import './add-suggestion.scss';
import InputName from './input-name';
import InputDescription from './input-description';

class AddSuggestion extends React.Component {
  static updatedSuggestion(field, value, suggestion, touch) {
    return new SuggestionModel({ [field]: value }, touch, suggestion);
  }

  constructor(props) {
    super(props);

    this.state = {
      suggestion: new SuggestionModel(),
    };

    this.onUpdateFactory = this.onUpdateFactory.bind(this);
    this.sendProspect = this.sendProspect.bind(this);
    this.helpText = this.helpText.bind(this);
  }

  onUpdateFactory(field, touch) {
    return (e) => {
      const suggestion = AddSuggestion.updatedSuggestion(field, e.target.value, this.state.suggestion, touch);

      this.setState({ suggestion });
    };
  }

  sendProspect(event) {
    event.preventDefault();
    const { suggestion: s } = this.state;

    s.touchAll();

    const submitEligible = !s.name.error && !s.description.error;

    if (submitEligible) {
      submitSuggestion(this.props.dispatch, s);
      this.setState({ suggestion: new SuggestionModel() });
    } else {
      this.setState({ suggestion: s });
    }
  }

  validationState(suggestionField) {
    const field = this.state.suggestion[suggestionField];
    let state = null;
    if (!field.error) {
      state = 'success';
    } else if (field.touched && field.error) {
      state = 'error';
    }

    return state;
  }

  helpText(suggestionField) {
    const field = this.state.suggestion[suggestionField];
    return field.touched && field.error ? field.error : '';
  }

  render() {
    const { config } = this.props;
    const { suggestion: s } = this.state;

    if (config.period !== PeriodEnum.SUGGEST) return null;

    return (
      <div className="add-suggestion">
        <form method="POST" action="" onSubmit={this.sendProspect}>
          <InputName
            onChange={this.onUpdateFactory('name', false)}
            onBlur={this.onUpdateFactory('name', true)}
            value={s.name.value}
            helpText={this.helpText('name')}
            validationState={this.validationState('name')}
          />
          <InputDescription
            onChange={this.onUpdateFactory('description', false)}
            onBlur={this.onUpdateFactory('description', true)}
            value={s.description.value}
            helpText={this.helpText('description')}
            validationState={this.validationState('description')}
          />

          <div className="add-suggestion__submit">
            <Button
              type="submit"
              bsStyle="primary"
              bsSize="large"
            >Add your suggestion</Button>
          </div>
        </form>
      </div>
    );
  }
}

AddSuggestion.propTypes = {
  config: React.PropTypes.object, //eslint-disable-line
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  config: state.config,
});

export default connect(mapStateToProps)(AddSuggestion);
