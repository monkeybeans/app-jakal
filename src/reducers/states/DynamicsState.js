import { SuggestionModel } from '../../models';
import StateBase from './StateBase';

export default class DynamicsState extends StateBase {
  constructor(props, inheritance) {
    super(props, inheritance, DynamicsState.TEMPLATE);
  }
}

function suggestions(v) {
  if (v) {
    return v.map(s =>
      new SuggestionModel({
        id: s.id,
        name: s.name,
        description: s.description,
        submitted: s.submitted,
        submitter: s.submitter,
        numVotes: s.num_votes,
      }),
    );
  }

  return [];
}

DynamicsState.TEMPLATE = {
  suggestions,
};
