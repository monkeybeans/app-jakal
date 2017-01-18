function periodMapper(period) {
  switch (period.toLowerCase()) {
    case 'suggest': return period.toUpperCase();
    case 'vote': return period.toUpperCase();
    case 'display': return period.toUpperCase();
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
