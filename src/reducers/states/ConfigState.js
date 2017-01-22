import { PeriodEnum } from '../../models';
import StateBase from './StateBase';

function period(value) {
  switch (value && value.toLowerCase()) {
    case 'suggest': return PeriodEnum.SUGGEST;
    case 'vote': return PeriodEnum.VOTE;
    case 'display': return PeriodEnum.DISPLAY;
    default: return undefined;
  }
}

export default class ConfigState extends StateBase {
  constructor(props, inheritance) {
    super(props, inheritance, ConfigState.template);
  }
}

ConfigState.template = {
  votingAllowed: 'votingAllowed',
  period,
  daysToNextPeriod: 'days_to_next_period',
  daysElapsedPeriod: 'elapsed_period_days',
};
