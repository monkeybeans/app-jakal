import { PeriodEnum } from '../../models';

function periodMapper(period) {
  switch (period.toLowerCase()) {
    case 'suggest': return PeriodEnum.SUGGEST;
    case 'vote': return PeriodEnum.VOTE;
    case 'display': return PeriodEnum.DISPLAY;
    default: throw new Error(`unknon period type: ${period}`);
  }
}

export default class ConfigState {
  constructor(props) {
    if (typeof props === 'object') {
      this.period = props.period ? periodMapper(props.period) : undefined;
      this.daysToNextPeriod = props.days_to_next_period;
      this.daysElapsedPeriod = props.elapsed_period_days;
    }
  }
}
