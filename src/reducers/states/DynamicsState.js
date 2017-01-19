import { SuggestionModel } from '../../models';

export default class DynamicsState {
  constructor(props = {}) {
    this.suggestions = props.suggestions ? props.suggestions.map(s => new SuggestionModel({
      id: s.id,
      name: s.name,
      description: s.description,
      submitted: s.submitted,
      submitter: s.submitter,
      numVotes: s.num_votes,
    })) : [];
  }
}
